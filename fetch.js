// Fetch API -- Get data
async function Request() {
  try {
    let response = await fetch("https://jsonplacehlder.typicode.com/todos");
    if (response.status == 200) {
      console.log(response.isok);
      let data = await response.text();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}
//   let data = await response.json();
//   let data = await response.blob(); // Especially used for fetching image data.

// & Using .then .catch to resolve promise.
// Request()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* Using async await to resolve promise.
async function fetchData() {
  let data = await Request();
  console.log(data);
}
fetchData();
