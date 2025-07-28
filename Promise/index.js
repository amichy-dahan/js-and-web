function oldAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Success");
      } else {
        reject(new Error("Failed"));
      }
    }, 1000);
  })

}

oldAsyncFunction().then(
  data => console.log(data)
).catch(
  err => console.log(err)
);