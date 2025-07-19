// ------------------------------------------
// Promise Basics
// ------------------------------------------

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("From promiseOne");
    resolve(); // Resolves after 1 second
  }, 1000);
});

console.log("promiseOne initial state:", promiseOne); // pending

promiseOne.then(function () {
  console.log("promiseOne consumed");
  console.log("promiseOne final state:", promiseOne); // fulfilled
});


// ------------------------------------------
// Another async task (Promise with then)
// ------------------------------------------

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 2');
    resolve();
  }, 2000);
}).then(() => {
  console.log('Task 2 resolved');
});


// ------------------------------------------
// Promise with reject (no .catch() attached) — Not recommended
// ------------------------------------------

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Reject then test');
    reject();
  }, 2000);
});
// No .then() or .catch() attached — unhandled rejection warning may show


// ------------------------------------------
// Promise stays pending (no resolve or reject)
// ------------------------------------------

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Resolve catch test'); // but no resolve or reject called
  }, 2000);
});
// No .catch() attached — promise remains pending


// ------------------------------------------
// Rejected Promise with proper catch()
// ------------------------------------------

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 3');
    reject("Task 3 failed");
  }, 2000);
}).catch((error) => {
  console.log('Task 3 caught error:', error);
});


// ------------------------------------------
// Promise resolving with data (then chain)
// ------------------------------------------

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "shubhamkr", userId: "skr1233" });
  }, 1000);
});

promiseTwo.then((user) => {
  console.log("PromiseTwo result:", user);
  console.log("Username:", user.username);
});


// ------------------------------------------
// Chaining then() and handling reject
// ------------------------------------------

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isLoggedIn = true;
    if (isLoggedIn) {
      resolve({ username: "shubham", status: "loggedIn" });
    } else {
      reject("Username or password is invalid");
    }
  }, 3000);
});

promiseThree
  .then((user) => {
    console.log("PromiseThree resolved:", user);
    return user.username + user.status;
  })
  .then((status) => {
    console.log("Status string:", status);
  })
  .catch((error) => {
    console.log("PromiseThree error:", error);
  })
  .finally(() => {
    console.log("PromiseThree finished (resolved or rejected)");
  });


// ------------------------------------------
// Using async/await with try/catch
// ------------------------------------------

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isLoggedIn = true;
    if (isLoggedIn) {
      resolve({ username: "javaScript", status: "inProgress" });
    } else {
      reject("Syntax is invalid");
    }
  }, 5000);
});

async function consumePromiseFour() {
  try {
    console.log("From async/await...");
    const response = await promiseFour;
    console.log("PromiseFour response:", response);
  } catch (error) {
    console.log("PromiseFour error:", error);
  }
}

consumePromiseFour();


// ------------------------------------------
// Fetch example using async/await
// ------------------------------------------

async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log("Fetched user[0]:", data[0]);
  } catch (error) {
    console.log("Fetch error:", error);
  }
}

getAllUsers();
