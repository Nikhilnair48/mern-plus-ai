const supportTicket = {
  id: "SUP-1048",
  customer: "Asha Menon",
  priority: "High",
  status: "Open",
  tags: ["Login", "Mobile", "Urgent"]
};

const updatedTags = [
  ...supportTicket.tags,
  "Password reset"
];

const updatedTicket = {
  ...supportTicket,
  status: "In progress",
  tags: updatedTags
};

function formatNotes(firstNote, ...otherNotes) {
  return [
    `Primary note: ${firstNote}`,
    `Other note count: ${otherNotes.length}`
  ];
}

const noteSummary = formatNotes(
  "Customer called",
  "Email sent",
  "Reset link shared"
);

document.querySelector("#status").textContent =
  "Updated copy ready";

document.querySelector("#output").textContent = [
  `Original status: ${supportTicket.status}`,
  `Updated status: ${updatedTicket.status}`,
  `Original tag count: ${supportTicket.tags.length}`,
  `Updated tag count: ${updatedTicket.tags.length}`,
  ...noteSummary
].join("\n");
