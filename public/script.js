const elFetch = document.querySelector("#fetchButton");
elFetch.addEventListener("click", async () => {
  const res = await fetch('/data.json');
  const json = await res.json();
  console.log('Fetched', json);
});
