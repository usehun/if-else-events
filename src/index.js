const body = document.body;

const newH1 = document.createElement("h1");
newH1.innerText = "Hello!";
body.prepend(newH1);

const h1 = document.querySelector("h1");

function handleresize() {
  h1.style.color = "white";

  if (innerWidth >= 1200) {
    body.classList.add("orange");
    body.style.backgroundColor = "orange";
    body.classList.remove("dodgerblue", "purple");
  } else if (innerWidth >= 800) {
    body.style.backgroundColor = "purple";
    body.classList.add("purple");
    body.classList.remove("orange", "dodgerblue");
  } else {
    body.style.backgroundColor = "dodgerblue";
    body.classList.add("dodgerblue");
    body.classList.remove("orange", "purple");
  }
}

handleresize();

window.addEventListener("resize", handleresize);
