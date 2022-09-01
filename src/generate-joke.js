import axios from "axios";

export default function generateJoke() {
  // return "The wedding was so beautiful. Even the cake was in tiers.";
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("https://icanhazdadjoke.com", config).then((res) => {
    document.getElementById("joke").innerHTML = res.data.joke;
  });
}
