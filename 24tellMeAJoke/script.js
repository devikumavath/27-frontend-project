const get = document.getElementById("get");
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  const getJoke = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      accept: "application/json",
    },
  });

  const data = await getJoke.json();
  const joke = data.joke;

  get.innerText = joke;

  console.log(joke);
});
