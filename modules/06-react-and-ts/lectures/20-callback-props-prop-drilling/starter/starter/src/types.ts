export type Ticket = {
  id: string;
  subject: string;
  customer: string;
  priority: "Normal" | "High";
};
