const supportTicket = {
  id: "SUP-1048",
  customer: "Asha Menon",
  priority: "High",
  status: "Open",
  summary: "Cannot sign in after password reset",
  tags: ["Login", "Mobile", "Urgent"]
};

const {
  id,
  customer,
  priority,
  status,
  summary,
  tags
} = supportTicket;

const [primaryTag, ...otherTags] = tags;

document.querySelector("#status").textContent =
  "Destructured values ready";

document.querySelector("#output").textContent = [
  `Ticket ID: ${id}`,
  `Customer: ${customer}`,
  `Priority: ${priority}`,
  `Ticket state: ${status}`,
  `Summary: ${summary}`,
  `Primary tag: ${primaryTag}`,
  `Other tags: ${otherTags.join(", ")}`
].join("\n");
