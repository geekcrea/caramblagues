function getFakeJoke() {
  const joke = jokesData[Math.floor(Math.random() * jokesData.length)];
  return joke;
}

document.getElementById("joke-btn").addEventListener("click", () => {
  const joke = getFakeJoke();
  document.getElementById("joke-question").textContent = joke.question;
  document.getElementById("joke-answer").textContent = joke.answer;
});