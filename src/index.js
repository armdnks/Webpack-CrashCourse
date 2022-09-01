import generateJoke from "./generate-joke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

const laughImg = document.getElementById("laugh-img");
laughImg.src = laughing;

const jokeBtn = document.getElementById("joke-btn");
jokeBtn.addEventListener("click", generateJoke);

// console.log(generateJoke());
