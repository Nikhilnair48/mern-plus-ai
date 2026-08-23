import { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import EscalationPanel from "./EscalationPanel";
import TicketQueue from "./TicketQueue";

function SupportDashboard() {
  
  // Store latest esclated ID within SupportDashboard? This'll be managed by React
  // For this, we'll need a state variable
  // let latestEscalatedId1 = "None";
  const [latestEscalatedId, setLatestEscalatedId] = useState<string>("None");

  function handleEscalate(ticketId: string) {
    console.log("Esclation requested for " + ticketId);
    // latestEscalatedId1 = ticketId;
    setLatestEscalatedId(ticketId);
  }
  
  return (
    <main className="page">
      <section className="shell">
        <DashboardHeader />
        <div className="dashboard-grid">
          <TicketQueue onEscalate={handleEscalate}/>
          <EscalationPanel latestEscalationId={latestEscalatedId} />
        </div>
      </section>
    </main>
  );
}

export default SupportDashboard;
