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
let team = document.querySelector(".team");

let profile = [
  {
    profileImg: "https://picsum.photos/300/300?random=1 ",
    teamName: "Jens Hansen",
    teamUsername: "jhansen1963",
    teamMail: "jenshansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },

  {
    profileImg: "https://picsum.photos/300/300?random=2 ",
    teamName: "Julie Hansen",
    teamUsername: "jhansen1963",
    teamMail: "juliehansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },

  {
    profileImg: "https://picsum.photos/300/300?random=3 ",
    teamName: "Mogens Hansen",
    teamUsername: "mhansen1963",
    teamMail: "mogenshansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },

  {
    profileImg: "https://picsum.photos/300/300?random=4 ",
    teamName: "Karl Hansen",
    teamUsername: "khansen1963",
    teamMail: "karlhansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },

  {
    profileImg: "https://picsum.photos/300/300?random=5 ",
    teamName: "Emilie Hansen",
    teamUsername: "ehansen1963",
    teamMail: "emiliehansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },

  {
    profileImg: "https://picsum.photos/300/300?random=6 ",
    teamName: "Josefine Hansen",
    teamUsername: "jhansen1963",
    teamMail: "josefinehansen@gmail.com",
    teamWebsiteBtn: "Se website",
  },
];

profile.forEach((element) => {
  team.innerHTML += `  
  <section class="team">
    <div class="team-profile">
        <div class="team-header"><div class="team-img"><img src="${element.profileImg}" alt=""> </div></div>
        <div class="team-name"><p> ${element.teamName}</p></div>
        <div class="team-username"><p> ${element.teamUsername}</p></div>
        <div class="team-mail"><p> ${element.teamMail}</p></div>
        <div class="team-website-btn"><a href="#"> ${element.teamWebsiteBtn}</a></div>
      </div>
      </section>
 `;
});
