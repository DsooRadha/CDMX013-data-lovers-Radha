
//import { Chart } from "chart.js";
import { dataGhibliJs, directors, peopleUnspecified, allcharacters, filtering, orderAZ, orderZA } from "./data.js";

//--------------------FETCH-----------------AllMoviesZA
dataAccess()
function dataAccess() {
  const column2 = document.querySelector('.ColumnTwo');
  const dataghibli = fetch("data/ghibli/ghibli.json").then(res => {
    res.json()
      .then(data => {
        const dataAll = orderZA(data.films)
        dataAll.forEach(p => {
          const card = document.createElement('div');
          card.className = "card";
          const img = document.createElement('img');
          img.src = p.poster;
          const title = document.createElement('h4')
          title.textContent = p.title;

          card.append(img, title)
          column2.appendChild(card);
        });
      })
  });
  return (dataghibli)
}
//--------------------DIRECTOR-----------------title and Date
const renderDirector = (directorName, columnDirectorSelector) => {

  const movies = filtering(dataGhibliJs, 'director', directorName)
  movies.forEach(d => {
    const columnDirectors = document.querySelector(columnDirectorSelector);

    const card = document.createElement('div');
    card.className = "card";
    const title = document.createElement('h2')
    title.textContent = d.title;
    const date = document.createElement('h6')
    date.textContent = d.release_date;

    card.append(title, date)
    columnDirectors.appendChild(card);
  })
}
directors.forEach(director => renderDirector(director.name, director.selector))

//--------------------GENDER-----------------SHOW
function showGender(item) {

  const card = document.createElement('div');
  card.className = "card";
  const img = document.createElement('img');
  img.src = item.img
  const name = document.createElement('h2')
  name.textContent = item.name

  card.append(img, name)
  return (card);
}
//--------------------DIRECTOR-----------------title and Date
window.addEventListener('load', () => {
  const columnCharacters = document.querySelector(".allCharacters");
  const columnMale = document.querySelector(".male");
  const columnFemale = document.querySelector(".female");
  const columnUnspecified = document.querySelector(".unspecified")
  const female = orderAZ(filtering(allcharacters, 'gender', 'Female'))
  const male = orderZA(filtering(allcharacters, 'gender', 'Male'))
  const other = orderAZ(peopleUnspecified)
  male.map(showGender).forEach(element => columnMale.append(element))
  female.map(showGender).forEach(element => columnFemale.append(element))
  other.map(showGender).forEach(element => columnUnspecified.append(element))
  allcharacters.map(showGender).forEach(element => columnCharacters.append(element))
})

//--------------------DOM-----------------
function handlingDom(clasesMostrar, classOcultar){ 
  for ( let i=0; i<clasesMostrar.length; i++){
    document.querySelector(clasesMostrar[i]).style.display='grid';
   }

   for ( let i=0; i<classOcultar.length; i++){
    document.querySelector(classOcultar[i]).style.display='none';
   }
}

const btnMovies = document.getElementById("movies");
btnMovies.addEventListener ("click", ()=> {
  handlingDom([".gridAll"],[".all",".startingScreen",".allPeopleMovies"])
});

const btnHayao = document.getElementById("Hayao");
btnHayao.addEventListener("click", ()=> {
  handlingDom([".all", ".columnHayao"],[".gridAll",".columnIsao",".columnGoro",".columnHiromasa",".columnYoshifumi",".columnHiroyuki",".startingScreen",".allPeopleMovies"])
});

const btnIsao = document.getElementById("Isao");
btnIsao.addEventListener("click", ()=> {
  handlingDom([".all", ".columnIsao"],[".gridAll",".columnGoro",".columnHiromasa",".columnYoshifumi",".columnHayao",".columnHiroyuki",".startingScreen",".allPeopleMovies"])
});

const btnYoshifumi = document.getElementById("Yoshifumi");
btnYoshifumi.addEventListener("click", ()=> {
  handlingDom([".all", ".columnYoshifumi"],[".gridAll",".columnGoro",".columnHiromasa",".columnIsao",".columnHayao",".columnHiroyuki",".startingScreen",".allPeopleMovies"])
});

const btnHiroyuki = document.getElementById("Hiroyuki");
btnHiroyuki.addEventListener("click", ()=> {
  handlingDom([".all", ".columnHiroyuki"],[".gridAll",".columnGoro",".columnHiromasa",".columnIsao",".columnYoshifumi",".columnHayao",".startingScreen",".allPeopleMovies"])
});

const btnGoro = document.getElementById("Goro");
btnGoro.addEventListener("click", ()=> {
  handlingDom([".all", ".columnGoro"],[".gridAll",".columnHiromasa",".columnIsao",".columnYoshifumi",".columnHayao",".startingScreen",".allPeopleMovies",".columnHiroyuki"])
});

const btnHiromasa = document.getElementById("Hiromasa");
btnHiromasa.addEventListener("click", ()=> {
  handlingDom([".all", ".columnHiromasa"],[".gridAll",".columnIsao",".columnYoshifumi",".columnHayao",".startingScreen",".allPeopleMovies",".columnGoro",".columnHiroyuki"])
});

const btnAAllCharacters = document.getElementById("allCharacters");
btnAAllCharacters.addEventListener("click", ()=> {
  handlingDom([".allPeopleMovies", ".allCharacters"],[".gridAll",".all",".startingScreen",".female",'.male',".unspecified"])
});

const btnMaleCharacters = document.getElementById("male");
btnMaleCharacters.addEventListener("click",()=> {
  handlingDom([".allPeopleMovies", ".male"],[".gridAll",".all",".startingScreen",".female",'.allCharacters',".unspecified"])
});

const btnFemaleCharacters = document.getElementById("female");
btnFemaleCharacters.addEventListener("click", ()=> {
  handlingDom([".allPeopleMovies", ".female"],[".gridAll",".all",".startingScreen",".male",'.allCharacters',".unspecified"])
});

const btnUnspecifiedCharacters = document.getElementById("s/a");
btnUnspecifiedCharacters.addEventListener("click",  ()=> {
  handlingDom([".allPeopleMovies", ".unspecified"],[".gridAll",".all",".startingScreen",".male",'.allCharacters',".female"])
});

//-----------------DIRECTORES DOM----------------

const renderDirectorImage = (directorName) => {
  const director = directors.filter(director => director.name === directorName)[0]
  return `<img id="imgHayao" src="${director.imgSrc}" alt="${director.name}" style="display: block;">`;
}

const directorSpaceRightElement = document.querySelector('.spaceRigth')

document.querySelectorAll('.directorNavItem').forEach(navItem => {
  navItem.addEventListener('click', (e) => {
    const navsito = e.target
    const directorName = navsito.dataset.directorName
    directorSpaceRightElement.innerHTML = ""
    directorSpaceRightElement.innerHTML = renderDirectorImage(directorName)
  })
})

// const graphCharacters=document.getElementById('graphCharacters')
// const chart= new Chart(graphCharacters, {type: 'doughnut',data})
  
//   const data={
// labels: ['MUJERES', 'HOMBRES', 'SIN ESPECIFICAR'],
//     datasets: [{
//       label: 'PERSONAJES',
//       data: [30, 5, 31],
//       backgroundColor: ['rgb(255, 99, 132)','rgb(54, 162, 235)','rgb(255, 205, 86)'],
//     }]
//   }


