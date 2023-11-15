const section = document.getElementById("section");
const header = document.getElementById("header");
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
  let myNav = document.getElementsByTagName("nav");//get tag devuelve un array
  let linea =document.createElement('hr');
  for (var i = 0; i < cat.length; i++) {
    let enlace = document.createElement('a');
    enlace.href='/categorias/category-page.html?parametroCategoria=' + cat[i].idCategoria;
    enlace.textContent = ' '+cat[i].nombreCategoria;
    myNav[0].appendChild(enlace);//obtengo la posicion 0
    myNav[0].appendChild(linea);
  }
}

function mostrarArticuloPorCategoria() {
  let parametro = new URL(location.href).searchParams.get("parametroCategoria");
  const articulos = jsonObj["articulos"];
  

  for (var i = 0; i < articulos.length; i++) {
    if (articulos[i].categoria === parametro) {

      //let parametroProducto = new URL(location.href).searchParams.get("parametroProducto");

      let enlaceProducto=document.createElement('a');
      enlaceProducto.href='/productos/productos.html?parametroProducto='+ articulos[i].idProducto;
      enlaceProducto.textContent= articulos[i].idProducto;
     
      
      const myArticle = document.createElement("article");
      myArticle.textContent = articulos[i].nombre;

      const img = document.createElement("img");
      img.src = articulos[i].imagen;

      const myP1 = document.createElement("p");
      myP1.textContent = articulos[i].precio;

      const myP2 = document.createElement("p");
      myP2.textContent = articulos[i].composicion;

      let btnComprar=document.createElement('button');
      btnComprar.textContent='Agregar';
      btnComprar.href='/carrito/carrito.html?parametroCarrito='

      const myP3 = document.createElement("p");
      myP3.textContent = "tallas:";

      const myList = document.createElement("ul");

      const tallas = articulos[i].tallas;

      for (var j = 0; j < tallas.length; j++) {
        const listItem = document.createElement("li");
        listItem.textContent = tallas[j];
        myList.appendChild(listItem);
      }
      myArticle.appendChild(enlaceProducto);
      myArticle.appendChild(img);
      myArticle.appendChild(myP1);
      myArticle.appendChild(myP2);
      myArticle.appendChild(myP3);
      myArticle.appendChild(myList);
      section.appendChild(myArticle);
      myArticle.appendChild(btnComprar);
    }
  }
}
//function mostrarArticuloPorID(){

  let parametro = new URL(location.href).searchParams.get("parametroProducto");
  const articulos = jsonObj["articulos"];

  for (var i = 0; i < articulos.length; i++) {
    if (articulos[i].idProducto === parametro) {

      const myArticle = document.createElement("article");
      myArticle.textContent = articulos[i].nombre;

      const img = document.createElement("img");
      img.src = articulos[i].imagen;

      const myP1 = document.createElement("p");
      myP1.textContent = articulos[i].precio;

      const myP2 = document.createElement("p");
      myP2.textContent = articulos[i].composicion;
      //agregando boton
      let btnComprar=document.createElement('button');
      btnComprar.textContent='Agregar';
      btnComprar.style.color='yelow';

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
      myArticle.appendChild(btnComprar);
    }
    //break;
  }
  


//}

