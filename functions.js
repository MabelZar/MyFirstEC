const section = document.getElementById("section");
//const header = document.getElementById("header");
//-------------------------------
function populateHeader() {
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["marca"];
  header.appendChild(myH1);

  const myP = document.createElement("h2");
  myP.textContent = "Tendencia: " + jsonObj.tendencia;
  header.appendChild(myP);
}

function populateNav() {
  let cat = jsonCat["categoria"];
  let myNab = document.getElementsByTagName("nav");//get tag devuelve un array
  let linea =document.createElement('hr');
  for (var i = 0; i < cat.length; i++) {
    let enlace = document.createElement('a');
    enlace.href='/categorias/category-page.html?parametroCategoria=' + cat[i].idCategoria;
    enlace.textContent = ' '+cat[i].nombreCategoria;
    // let parrafo = document.createElement('p');
    //parrafo.appendChild(enlace);
    myNab[0].appendChild(enlace);//obtengo la posicion 0
    // enlace.style.display:
    myNab[0].appendChild(linea);
  }
}



function show() {
  let parametro = new URL(location.href).searchParams.get("categoryParametro");
  const articulos = jsonObj["articulos"];
  //probando funcion mostrar un solo producto

 
  //if(parametro===)
  for (var i = 0; i < articulos.length; i++) {
    if (articulos[i].categoria === parametro) {
      const myArticle = document.createElement("article");
      myArticle.textContent = articulos[i].nombre;

      const img = document.createElement("img");
      img.src = articulos[i].imagen;

      const myP1 = document.createElement("p");
      myP1.textContent = articulos[i].precio;

      const myP2 = document.createElement("p");
      myP2.textContent = articulos[i].composicion;

      const myP3 = document.createElement("p");
      myP3.textContent = "tallas:";

      const myList = document.createElement("ul");

      const tallas = articulos[i].tallas;

      for (var j = 0; j < tallas.length; j++) {
        const listItem = document.createElement("li");
        listItem.textContent = tallas[j];
        myList.appendChild(listItem);
      }

      myArticle.appendChild(img);
      myArticle.appendChild(myP1);
      myArticle.appendChild(myP2);
      myArticle.appendChild(myP3);
      myArticle.appendChild(myList);
      section.appendChild(myArticle);
    }
  }
}
//console.info(jsonObj)
//console.info(jsonObj.articulos[0].tallas[0])
populateHeader();
populateNav();
show();
