let container = document.getElementById("container");

container.innerHTML = `
  
   <h2> Course name is javaScript</h2>
   <h4> Javascript is a Programming language </h4>

   <h4> COurse DUration : 3 Months  </h4>

     `;

let sample = document.getElementById("sample");

console.log("textContent: ", sample.textContent);
console.log("InnerText: ", sample.innerText);

let heading = document.getElementById("heading");

let button = document.getElementById("changeButton");

button.addEventListener("click", function () {
  heading.style.backgroundColor = "lightgreen";
  heading.style.color = "red";
  heading.style.fontSize = "35px";
});

let heading1 = document.getElementById("heading");

let button1 = document.getElementById("changeHeading");

button1.addEventListener("click", () => {
  heading1.textContent = "Welcome TO web- Development Batch";
  heading1.style.backgroundColor = "yellow";
});
