import {
  loadMaintenanceRequest
} from "./70-maintenance-service.js";

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
    const request = await loadMaintenanceRequest(shouldFail);

    const {
      requestId,
      resident,
      area,
      issue,
      priority,
      status
    } = request;

    const scheduledRequest = {
      ...request,
      status: "Scheduled"
    };

    renderMaintenanceRequest(
      requestId,
      resident,
      area,
      issue,
      priority,
      scheduledRequest.status
    );

    maintenanceStatus.textContent = "Maintenance request loaded";
    console.log(`Original status: ${status}`);
    console.log(`Copied status: ${scheduledRequest.status}`);
  } catch (error) {
    maintenanceStatus.textContent =
      "Maintenance request could not be loaded";
    maintenanceOutput.textContent = error.message;
    console.log(error.message);
  }
}

document.querySelector("#load-maintenance").addEventListener("click", () => {
  showMaintenanceRequest(false);
});

document.querySelector("#fail-maintenance").addEventListener("click", () => {
  showMaintenanceRequest(true);
});
