/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
Questi sono i dati:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const eleMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "assets/img/wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "assets/img/angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "assets/img/walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "assets/img/angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "assets/img/scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "assets/img/barbara-ramos-graphic-designer.jpg",
    },
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for (i = 0; i < eleMembers.length; i++) {
    console.log(eleMembers[i]);
};

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

const eleMembersList = document.querySelector(".members");

for (let data of eleMembers) {
    eleMembersList.innerHTML += 
    `<li class="col-12 col-md-6 col-lg-4 py-2 text-center">
        <div class="card bg-light">
            <img class="w-100" src="${data.photo}" alt="">
            <div class="fw-bold">${data.name}</div>
            <div>${data.role}</div>
        </div>
    </li>`;
};

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// trasformo la chiave "photo", in un vero tag img html



