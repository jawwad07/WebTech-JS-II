function checkStatus(callback) {
  setTimeout(() => {
    callback("Status OK");
  }, 2000);
}

function checkStatusPromise() {
  return new Promise((resolve, reject) => {
    checkStatus((result) => {
      resolve(result);
    });
  });
}

checkStatusPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
