// TODO 1: Import loadCheckoutRequest from 59-equipment-service.js.

const checkoutStatus = document.querySelector("#checkout-status");
const checkoutOutput = document.querySelector("#checkout-output");

function renderCheckoutRequest(
  requestId,
  requester,
  item,
  duration,
  status
) {
  checkoutOutput.textContent = [
    `Request ${requestId}`,
    `Requester: ${requester}`,
    `Item: ${item}`,
    `Duration: ${duration}`,
    `Status: ${status}`
  ].join("\n");
}

async function showCheckoutRequest(shouldFail) {
  checkoutStatus.textContent = "Loading checkout request...";
  checkoutOutput.textContent = "No request loaded";

  try {
    // TODO 2: Await loadCheckoutRequest(shouldFail).

    // TODO 3: Destructure requestId, requester, item, duration, and status.

    // TODO 4: Create approvedRequest with spread and status: "Approved".

    // TODO 5: Render the approved request and display
    // "Checkout request loaded".

    checkoutStatus.textContent = "Complete TODO 2 to TODO 5";
  } catch (error) {
    // TODO 6: Display "Checkout request could not be loaded"
    // and log error.message.

    checkoutStatus.textContent = "Complete TODO 6";
  }
}

document.querySelector("#load-request").addEventListener("click", () => {
  showCheckoutRequest(false);
});

document.querySelector("#fail-request").addEventListener("click", () => {
  showCheckoutRequest(true);
});
