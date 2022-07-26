//FUNCIONES
let generateRandomColors = (numero) => {
  for (let i = 0; i < numero; i++) {
    colors[i] = randomColor();
  }
};
function changeColors(x) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = x;
  }
}
function pickColor() {
  let pick = Math.round(Math.random() * (colors.length -1));
  return colors[pick];
}
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//VARIABLES
let easyHard = 6;
let colors = [];
generateRandomColors(easyHard);
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let mensaje = document.querySelector("#mensaje");
let h1 = document.querySelector(".h1");
let reset = document.querySelector("#reset");
let squares = document.querySelectorAll(".square");
let facil = document.querySelector("#facil");
let dificil = document.querySelector("#dificil");

//ENGRANAJE
for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  colorDisplay.textContent = pickedColor;
  squares[i].addEventListener("click", function () {
    let clickedColor = squares[i].style.backgroundColor;
    if (clickedColor == pickedColor) {
      mensaje.textContent = "¡Correcto!";
      h1.style.backgroundColor = pickedColor;
      changeColors(pickedColor);
      reset.textContent = "¿Jugar de nuevo?";
    } else {
      squares[i].style.backgroundColor = document.body.style.backgroundColor;
      mensaje.textContent = "¡Intentalo Nuevamente!";
    }
  });
}

//RESET
reset.addEventListener("click", function () {
  reset.textContent = "Nuevos Colores";
  mensaje.textContent = " ";
  colors = []
  generateRandomColors(easyHard);
  pickedColor = pickColor();
  h1.style.backgroundColor = document.body.style.backgroundColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    colorDisplay.textContent = pickedColor;
    squares[i].addEventListener("click", function () {
      let clickedColor = squares[i].style.backgroundColor;
      if (clickedColor == pickedColor) {
        mensaje.textContent = "¡Correcto!";
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor);
      } else {
        squares[i].style.backgroundColor = document.body.style.backgroundColor;
        mensaje.textContent = "¡Intentalo Nuevamente!";
      }
    });
  }
});

// MODO FACIL
facil.addEventListener("click", function () {
  this.classList.add("selected");
  dificil.classList.remove("selected");
  reset.textContent = "Nuevos Colores";
  mensaje.textContent = " ";
  colors = [];
  generateRandomColors(3);
  console.log(colors);
  pickedColor = pickColor();
  console.log(pickedColor);
  colorDisplay.textContent = pickedColor; //Agregado
  h1.style.backgroundColor = document.body.style.backgroundColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

//HARD MODE
dificil.addEventListener("click", function () {
  this.classList.add("selected");
  facil.classList.remove("selected");
  reset.textContent = "Nuevos Colores";
  mensaje.textContent = " ";
  colors = [];
  generateRandomColors(6);
  console.log(colors);
  pickedColor = pickColor();
  console.log(pickedColor);
  console.log(squares)
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = document.body.style.backgroundColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.display = "block"
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.backgroundColor = backgroundColorBody
    }
  }
});