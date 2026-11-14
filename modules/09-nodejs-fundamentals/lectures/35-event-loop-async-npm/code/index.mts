const seats = [12, 15];
function labelSeats(n: number) {
    return `${n} seats`;
}

/*
    .map -> iterate over the aray of numbers -> for each of the elements -> call labelSeats
*/
const labels = seats.map(labelSeats);
/*
const labels = seats.map((n) => `${n} seats`);
*/

console.log(labels);