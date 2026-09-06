import { useReducer } from "react";

type DeliveryStatus =
  | "pending"
  | "out-for-delivery"
  | "delivered";

type Delivery = {
  id: string;
  recipient: string;
  status: DeliveryStatus;
};

type DeliveryAction =
  | {
      type: "sent-out";
      deliveryId: string;
    }
  | {
      type: "delivered";
      deliveryId: string;
    }
  | {
      type: "removed";
      deliveryId: string;
    }
  | {
      type: "reset";
    };

const initialDeliveries: Delivery[] = [
  {
    id: "D-101",
    recipient: "Aarav Mehta",
    status: "pending",
  },
  {
    id: "D-204",
    recipient: "Maya Kapoor",
    status: "out-for-delivery",
  },
  {
    id: "D-317",
    recipient: "Rohan Iyer",
    status: "delivered",
  },
];

function deliveryReducer(
  deliveries: Delivery[],
  action: DeliveryAction,
): Delivery[] {
  switch (action.type) {
    case "sent-out":
      return deliveries.map((delivery) =>
        delivery.id ===
        action.deliveryId
          ? {
              ...delivery,
              status:
                "out-for-delivery",
            }
          : delivery,
      );

    case "delivered":
      return deliveries.map((delivery) =>
        delivery.id ===
        action.deliveryId
          ? {
              ...delivery,
              status: "delivered",
            }
          : delivery,
      );

    case "removed":
      return deliveries.filter(
        (delivery) =>
          delivery.id !==
          action.deliveryId,
      );

    case "reset":
      return initialDeliveries;

    default:
      return deliveries;
  }
}

const statusLabels: Record<
  DeliveryStatus,
  string
> = {
  pending: "Pending",
  "out-for-delivery":
    "Out for delivery",
  delivered: "Delivered",
};

const statusStyles: Record<
  DeliveryStatus,
  string
> = {
  pending:
    "bg-blue-50 text-blue-700 ring-blue-600/20",
  "out-for-delivery":
    "bg-amber-50 text-amber-700 ring-amber-600/20",
  delivered:
    "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
};

export function DeliveryTracker() {
  const [deliveries, dispatch] =
    useReducer(
      deliveryReducer,
      initialDeliveries,
    );

  return (
    <main className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Operations dashboard
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">
            Delivery Tracker
          </h1>
        </div>

        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "reset",
            })
          }
          className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Reset tracker
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {deliveries.map((delivery) => (
          <article
            key={delivery.id}
            className="rounded-xl border border-slate-200 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold text-slate-900">
                  {delivery.recipient}
                </h2>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {delivery.id}
                </p>
              </div>

              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${statusStyles[delivery.status]}`}
              >
                {
                  statusLabels[
                    delivery.status
                  ]
                }
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {delivery.status ===
                "pending" && (
                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "sent-out",
                      deliveryId:
                        delivery.id,
                    })
                  }
                  className="rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Move next
                </button>
              )}

              {delivery.status ===
                "out-for-delivery" && (
                <button
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "delivered",
                      deliveryId:
                        delivery.id,
                    })
                  }
                  className="rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Mark delivered
                </button>
              )}

              <button
                type="button"
                onClick={() =>
                  dispatch({
                    type: "removed",
                    deliveryId:
                      delivery.id,
                  })
                }
                className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
