let button = document.getElementById("buttonbg");

let changebg = document.getElementById("changebg");

// button.addEventListener("click", () => {
//   changebg.style.backgroundColor = "blue";
// });
button.addEventListener("click", () => {
  if (changebg.style.backgroundColor === "blue") {
    changebg.style.backgroundColor = "white";
  } else {
    changebg.style.backgroundColor = "blue";
  }
});
