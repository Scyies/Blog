import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { 
    getFirestore, collection, getDocs
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';


const firebaseConfig = {
  apiKey: "AIzaSyBmUWR_wcXtlHGFvm-lnFvyZFGM-R9nB4I",
  authDomain: "teste-50fd4.firebaseapp.com",
  projectId: "teste-50fd4",
  storageBucket: "teste-50fd4.appspot.com",
  messagingSenderId: "590380868288",
  appId: "1:590380868288:web:fdb27959a013e2273d4325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'animes');

let publicacoes = []

getDocs(colRef)
    .then((snapshot)=>{
        snapshot.docs.forEach(doc => {
            publicacoes.push({ ...doc.data(),id : doc.id})
        });
        // console.log(publicacoes)

        publicacoes.forEach((publicacao) => {
            // console.log(publicacao);
            const div = document.querySelector('.main-destaques--posts');
            const itemContainer = document.createElement('li');
        
            itemContainer.classList.add('publicacaoContainer');
        
            itemContainer.innerHTML = ` <img class="publicacao-img" src="${publicacao.imagem}"</img>
                                        <div class="publicacao-text">
                                            <h2 class="publicacao-titulo">${publicacao.titulo}</h2>
                                            <p class="publicacao-descricao">${publicacao.descricao}</p>
                                        </div>`;
            div.appendChild(itemContainer);
        });
    })
    .catch (err => {
        console.log(err.message);
    })



// const publicacoes2 = [{
//     imagem: 'https://c4.wallpaperflare.com/wallpaper/211/732/863/tohsaka-rin-archer-fate-stay-night-fate-series-fate-stay-night-wallpaper-preview.jpg',
//     titulo: 'Fate é muito based',
//     descricao: 'Teste'
// },
// {
//     imagem: 'https://wallpaperaccess.com/full/768533.png',
//     titulo: 'Steins;gate',
//     descricao: 'El Psy Congroo'
// },
// {
//     imagem: 'https://images6.alphacoders.com/512/thumb-1920-512323.jpg',
//     titulo: 'No game no life',
//     descricao: 'Teste'
// }
// ];

// console.log(publicacoes2);
