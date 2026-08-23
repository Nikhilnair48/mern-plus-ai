const checkoutRequest = {
  requestId: "EQ-2047",
  requester: "Naveen Rao",
  item: "USB microphone",
  duration: "3 days",
  status: "Pending"
};

export function loadCheckoutRequest(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Equipment service unavailable"));
        return;
      }

      resolve(checkoutRequest);
    }, 700);
  });
}
