
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1 resolved in 1 second");
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2 resolved in 3 seconds");
  }, 3000);
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log("Winner:", result);
  })
  .catch(() => {
    console.error("Error printing the result");
  });
