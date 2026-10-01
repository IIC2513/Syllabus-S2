const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), 3000)
);

Promise.race([fetch("/api/datos"), timeout])
    .then(res => console.log("Llegó a tiempo"))
    .catch(err => console.error(err.message));
