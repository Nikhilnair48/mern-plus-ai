// TODO 1: Import loadMaintenanceRequest from 70-maintenance-service.js.

const maintenanceStatus = document.querySelector("#maintenance-status");
const maintenanceOutput = document.querySelector("#maintenance-output");

function renderMaintenanceRequest(
  requestId,
  resident,
  area,
  issue,
  priority,
  status
) {
  maintenanceOutput.textContent = [
    `Request ${requestId}`,
    `Resident: ${resident}`,
    `Area: ${area}`,
    `Issue: ${issue}`,
    `Priority: ${priority}`,
    `Status: ${status}`
  ].join("\n");
}

async function showMaintenanceRequest(shouldFail) {
  maintenanceStatus.textContent = "Loading maintenance request...";
  maintenanceOutput.textContent = "No request loaded";

  try {
    // TODO 2: Await loadMaintenanceRequest(shouldFail).

    // TODO 3: Destructure requestId, resident, area, issue,
    // priority, and status.

    // TODO 4: Create scheduledRequest with spread and
    // status: "Scheduled".

    // TODO 5: Render the scheduled request and display
    // "Maintenance request loaded".

    maintenanceStatus.textContent = "Complete TODO 2 to TODO 5";
  } catch (error) {
    // TODO 6: Display "Maintenance request could not be loaded"
    // and log error.message.

    maintenanceStatus.textContent = "Complete TODO 6";
  }
}

document.querySelector("#load-maintenance").addEventListener("click", () => {
  showMaintenanceRequest(false);
});

document.querySelector("#fail-maintenance").addEventListener("click", () => {
  showMaintenanceRequest(true);
});
