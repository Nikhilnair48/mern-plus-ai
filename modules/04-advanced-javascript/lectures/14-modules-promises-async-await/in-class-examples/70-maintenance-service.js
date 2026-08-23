const maintenanceRequest = {
  requestId: "MT-3185",
  resident: "Devika Sen",
  area: "Kitchen",
  issue: "Tap leak",
  priority: "Medium",
  status: "Reported"
};

export function loadMaintenanceRequest(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Maintenance service unavailable"));
        return;
      }

      resolve(maintenanceRequest);
    }, 700);
  });
}
