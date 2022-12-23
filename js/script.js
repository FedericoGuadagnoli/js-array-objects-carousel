//^ OPERAZIONI PRELIMINARI

// Prendo gli elementi di interesse dal DOM
const gallery = document.querySelector('#carousel .gallery');
const thumb = document.getElementById('thumbnails');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Preparo l'array di oggetti
const games = [
    {
      image: '01.jpg',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
      image: '02.jpg',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
      image: '03.jpg',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
      image: '04.jpg',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
      image: '05.jpg',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];

  // Creo una funzione per cambiare immagine
function changePic(target){
  galleryFigures[currentActiveIndex].classList.remove('active');
  thumbImages[currentActiveIndex].classList.remove('active');

if(target === 'next'){
  currentActiveIndex++;

  if(currentActiveIndex === galleryFigures.length) currentActiveIndex = 0;
} else if (target === 'prev') {
  currentActiveIndex--;

  if(currentActiveIndex < 0) currentActiveIndex = galleryFigures.length - 1;
} else {
  currentActiveIndex = target;
}

galleryFigures[currentActiveIndex].classList.add('active');
thumbImages[currentActiveIndex].classList.add('active');
};


// Preparo gli elementi da inserire nel DOM
let galleryElements ='';
let thumbElements = '';

games.forEach((game, i) => {
  const img = `<img src="img/${game.image}" alt="landscape_${i}">`;

  galleryElements += `
    <figure>
      ${img}
      <div class="description">
        <h1>${game.title}</h1>
        <p>${game.text}</p>
      </div>
    </figure>
  `;

  thumbElements += img;
});

// Stampo in pagina
gallery.innerHTML = galleryElements;
thumb.innerHTML = thumbElements;

// Prendo i due elementi appena stampati
const galleryFigures = document.querySelectorAll('.gallery figure');
const thumbImages = document.querySelectorAll('#thumbnails img');


// aggiungo la classe active alla prima immagine di galleryFigures
let currentActiveIndex = 0;
galleryFigures[currentActiveIndex].classList.add('active');

// Aggiungo un evento al click dei bottoni e delle immagini della thumbnails e gli aggancio la funzione per cambiare immagini
next.addEventListener('click', function(){
  changePic('next');
});

prev.addEventListener('click', function(){
  changePic('prev');
});

for (let i = 0; i < thumbImages.length; i++){
    const thumb = thumbImages[i];

    thumb.addEventListener('click', function(){
      changePic(i);
    });
};