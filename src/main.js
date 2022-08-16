import { filterDirector} from "./data.js";

dataAccess();
function dataAccess() {
  const dataghibli = fetch("data/ghibli/ghibli.json").then(res => {
    res.json()
      .then(dataaaa => {
        //console.log(dataaaa)
        const data = dataaaa.films
        data.forEach(p => {
          //console.log(p.title);    //imprime en la consola el título de cada pelicula del array
          let column2 = document.querySelector('.ColumnTwo');    //buscamos el elemento con clase .ColumnTwo y lo guardamos en una variable
          let div = document.createElement('div');    //creamos un elemento div por cada elemento del array
          div.setAttribute('id', 'card');    //le asignamos el id 'card' a cada div
          //le agregamos el título de cada película con interpolación
          div.innerHTML = `<img class="poster"src="${p.poster}"><h4> ${p.title}</h4>`;
          column2.appendChild(div);    //agregamos ese div creado dentro del div con clase ColumnTwo
        });
      })
  });
  return (dataghibli)
  //console.log(dataghibli);
}
 
const renderDirector = (directorName, columnDirectorSelector) => {
  const director = filterDirector(directorName)
  director.forEach(d => {
    let columnDirectors = document.querySelector(columnDirectorSelector);
    let div = document.createElement('div');    //creamos un elemento div por cada elemento del array
    div.setAttribute('id', 'title');    //le asignamos el id 'card' a cada div
    div.innerHTML = `<h2> ${d.title}</h2><h6>${d.release_date}</h6>`;
    columnDirectors.appendChild(div);
  })
}

const directors = [
  {name: "Isao Takahata", selector: '.columnIsao'},
  {name: "Hayao Miyazaki", selector: '.columnHayao'},
  {name: "Yoshifumi Kondō", selector: '.columnYoshifumi'},
  {name: "Hiroyuki Morita", selector: '.columnHiroyuki'},
  {name: "Gorō Miyazaki", selector: '.columnGoro'},
  {name: "Hiromasa Yonebayashi", selector: '.columnHiromasa'},
]
directors.forEach(director => renderDirector(director.name, director.selector))

const btnHayao = document.getElementById("Hayao");
btnHayao.addEventListener("click", function (e) {
  e.preventDefault() //evita que se corra la funcion por accidente como cuando recargas la pagina XD
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector("#imgIsao").style.display = "none";
  document.querySelector(".columnIsao").style.display= "none";
  document.querySelector(".columnHayao").style.display= "grid";
  document.querySelector("#imgHayao").style.display = "block";
  document.querySelector(".columnYoshifumi").style.display= "none";
  document.querySelector("#imgYoshifumi").style.display = "none";
  document.querySelector(".columnHiroyuki").style.display= "none";
  document.querySelector("#imgHiroyuki").style.display = "none"
  document.querySelector(".columnGoro").style.display= "none";
  document.querySelector("#imgGoro").style.display = "none";
  document.querySelector(".columnHiromasa").style.display= "none";
  document.querySelector("#imgHiromasa").style.display = "none";
});

const btnIsao = document.getElementById("Isao");
btnIsao.addEventListener("click", function (e) {
  e.preventDefault() //evita que se corra la funcion por accidente como cuando recargas la pagina XD
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector("#imgIsao").style.display = "block"
  document.querySelector(".columnIsao").style.display= "grid";
  document.querySelector(".columnHayao").style.display= "none";
  document.querySelector("#imgHayao").style.display = "none";
  document.querySelector(".columnHiroyuki").style.display= "none";
  document.querySelector("#imgHiroyuki").style.display = "none"
  document.querySelector(".columnGoro").style.display= "none";
  document.querySelector("#imgGoro").style.display = "none";
  document.querySelector(".columnHiromasa").style.display= "none";
  document.querySelector("#imgHiromasa").style.display = "none";
});

const btnYoshifumi = document.getElementById("Yoshifumi");
btnYoshifumi.addEventListener("click", function (e) {
  e.preventDefault() //evita que se corra la funcion por accidente como cuando recargas la pagina XD
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector("#imgIsao").style.display = "none";
  document.querySelector(".columnIsao").style.display= "none";
  document.querySelector(".columnHayao").style.display= "none";
  document.querySelector("#imgHayao").style.display = "none";
  document.querySelector(".columnYoshifumi").style.display= "grid";
  document.querySelector("#imgYoshifumi").style.display = "block"
  document.querySelector(".columnHiroyuki").style.display= "none";
  document.querySelector("#imgHiroyuki").style.display = "none"
  document.querySelector(".columnGoro").style.display= "none";
  document.querySelector("#imgGoro").style.display = "none";
  document.querySelector(".columnHiromasa").style.display= "none";
  document.querySelector("#imgHiromasa").style.display = "none";
});


const btnHiroyuki = document.getElementById("Hiroyuki");
btnHiroyuki.addEventListener("click", function (e) {
  e.preventDefault() 
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector("#imgIsao").style.display = "none";
  document.querySelector(".columnIsao").style.display= "none";
  document.querySelector(".columnHayao").style.display= "none";
  document.querySelector("#imgHayao").style.display = "none";
  document.querySelector(".columnYoshifumi").style.display= "none";
  document.querySelector("#imgYoshifumi").style.display = "none";
  document.querySelector(".columnHiroyuki").style.display= "grid";
  document.querySelector("#imgHiroyuki").style.display = "block";
  document.querySelector(".columnGoro").style.display= "none";
  document.querySelector("#imgGoro").style.display = "none";
  document.querySelector(".columnHiromasa").style.display= "none";
  document.querySelector("#imgHiromasa").style.display = "none";
});


const btnGoro = document.getElementById("Goro");
btnGoro.addEventListener("click", function (e) {
  e.preventDefault() 
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector("#imgIsao").style.display = "none";
  document.querySelector(".columnIsao").style.display= "none";
  document.querySelector(".columnHayao").style.display= "none";
  document.querySelector("#imgHayao").style.display = "none";
  document.querySelector(".columnYoshifumi").style.display= "none";
  document.querySelector("#imgYoshifumi").style.display = "none";
  document.querySelector(".columnHiroyuki").style.display= "none";
  document.querySelector("#imgHiroyuki").style.display = "none";
  document.querySelector(".columnGoro").style.display= "grid";
  document.querySelector("#imgGoro").style.display = "block";
  document.querySelector(".columnHiromasa").style.display= "none";
  document.querySelector("#imgHiromasa").style.display = "none";
});

const btnHiromasa = document.getElementById("Hiromasa");
btnHiromasa.addEventListener("click", function (e) {
  e.preventDefault() 
  document.querySelector(".gridAll").style.display = "none";
  document.querySelector(".all").style.display = "grid";
  document.querySelector("#imgIsao").style.display = "none";
  document.querySelector(".columnIsao").style.display= "none";
  document.querySelector(".columnHayao").style.display= "none";
  document.querySelector("#imgHayao").style.display = "none";
  document.querySelector(".columnYoshifumi").style.display= "none";
  document.querySelector("#imgYoshifumi").style.display = "none";
  document.querySelector(".columnHiroyuki").style.display= "none";
  document.querySelector("#imgHiroyuki").style.display = "none";
  document.querySelector(".columnGoro").style.display= "none";
  document.querySelector("#imgGoro").style.display = "none";
  document.querySelector(".columnHiromasa").style.display= "grid";
  document.querySelector("#imgHiromasa").style.display = "block";
});
