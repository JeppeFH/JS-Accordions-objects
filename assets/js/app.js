/*Navigation*/
/* 

----- Udskriv acoordions via JS: -----
- lav et array med objekter (et objekt for hver accordion)
    - Hvert object skal have følgende keys: title og bodytext 

- for at få dem udskrevet, skal der forEach'es over array'et med objekter
- i forEach'en udskrives html'en hver accordion (inde i ``)  */

let headline = document.querySelector(".accordion");
let bodytext = document.querySelector(".panel");

let container = document.querySelector(".container");

let accordions = [
  { title: "Overskrift 1", bodytext: "Brødtekst 1" },
  { title: "Overskrift 2", bodytext: "Brødtekst 2" },
  { title: "Overskrift 3", bodytext: "Brødtekst 3" },
];

accordions.forEach((element) => {
  container.innerHTML += `  
  <div class="accordion"> 
    <p> ${element.title}</p>
      <div class="panel">
      <p> ${element.bodytext}</p>
      </div>
    </div>

 `;
});

/*
----- Funktionalitet (åbn & lukke): -----
- Hver accordion har class'en .accordion. gem dem ned i en variabel ( brug querySelectorAll), og foreach over dem, så hver enkel kan trykkes på
    - brug e.currentTarget
- husk 'classList.toggle' istedet for 'add'
*/

/*Accordians, funktionalitet*/
const accOutPut = document.querySelectorAll(".accordion");

accOutPut.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
  });
});

/* Opgave teaminfo */
let teamImg = [
  "https://picsum.photos/300/300?random=1 ",
  "https://picsum.photos/300/300?random=2 ",
  "https://picsum.photos/300/300?random=3 ",
  "https://picsum.photos/300/300?random=4 ",
  "https://picsum.photos/300/300?random=5 ",
  "https://picsum.photos/300/300?random=6 ",
];
