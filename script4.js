
const login = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(" Jawwad logged in.");
      resolve({ userId: 123 });
    }, 1000);
  });
};

const getProfile = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const simulateError = true; 

      if (simulateError) {
        reject("Failed to fetch profile details!");
      } else {
        console.log(" Fetching profile for user ID ");
        resolve({ name: "Jawwad", status: "Active" });
      }
    }, 1000);
  });
};

login()
  .then(user => {
    return getProfile(user.userId); // Return next Promise
  })
  .then(profile => {
    console.log("Profile details received:", profile);
  })
  .catch(error => {
    console.error("An error occurred during the process:", error);
  });
