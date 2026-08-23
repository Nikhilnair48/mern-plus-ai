import {
  loadCheckoutRequest
} from "./59-equipment-service.js";

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
    const request = await loadCheckoutRequest(shouldFail);

    const {
      requestId,
      requester,
      item,
      duration,
      status
    } = request;

    const approvedRequest = {
      ...request,
      status: "Approved"
    };

    renderCheckoutRequest(
      requestId,
      requester,
      item,
      duration,
      approvedRequest.status
    );

    checkoutStatus.textContent = "Checkout request loaded";
    console.log(`Original status: ${status}`);
    console.log(`Copied status: ${approvedRequest.status}`);
  } catch (error) {
    checkoutStatus.textContent =
      "Checkout request could not be loaded";
    checkoutOutput.textContent = error.message;
    console.log(error.message);
  }
}

document.querySelector("#load-request").addEventListener("click", () => {
  showCheckoutRequest(false);
});

document.querySelector("#fail-request").addEventListener("click", () => {
  showCheckoutRequest(true);
});
