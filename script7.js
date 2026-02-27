const login = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Jawwad logged in.");
      resolve({ userId: 123 });
    }, 1000);
  });
};

const getProfile = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const simulateError = false; 

      if (simulateError) {
        reject(new Error("Failed to fetch profile details!"));
      } else {
        console.log(" Fetching profile for user ID ");
        resolve({ name: "Jawwad", status: "Active" });
      }
    }, 1000);
  });
};

async function startProcess() {
  try {
    const user = await login();
    const profile = await getProfile(user.userId);
    console.log(" Profile details received:", profile);
  } catch (error) {
    console.error("An error occurred during the process:", error.message);
  }
}

startProcess();
