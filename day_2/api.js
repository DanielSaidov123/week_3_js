 const url = "https://swapi.dev/api/";
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error", error);
  }
}
fetchData().then((data) => {
  console.log(data);
}); 