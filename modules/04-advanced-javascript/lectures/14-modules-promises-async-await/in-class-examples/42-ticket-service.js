import {
  supportTicket
} from "./28-ticket-data.js";

export function loadTicket(shouldFail) {
  // returns a promise object
  // what does a promise object accept? a function
    // what are the parmaeters of the function? resolve (success), reject (failure)
  return new Promise((resolve, reject) => {

    // invoking a function, setTimeout (a function that already exists in the browser)
    // what does setTimeout accept? first parameter: a function, second parameter: delay in milliseconds
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Ticket service unavailable"));
        return;
      }

      resolve(supportTicket);
    }, 800);
  });
}
