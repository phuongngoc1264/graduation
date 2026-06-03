function openCard() {
  const envelope = document.querySelector(".envelope");
  const cover = document.getElementById("cover");
  const card = document.getElementById("card");

  envelope.classList.add("open");

  setTimeout(() => {
    cover.classList.add("hide-cover");
  }, 700);

  setTimeout(() => {
    cover.style.display = "none";
    card.style.display = "flex";
  }, 1400);
}
