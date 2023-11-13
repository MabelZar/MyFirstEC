const section = document.getElementById("section");
const header = document.getElementById("header");

const jsonObj = {
    "tipo de prenda": "abrigos",
    "lugar": "España",
    "tendencia": 2023,
    "descripcion": "Abrigos confeccionado con lana etc etc...",
    "articulos": [
      {
        "nombre": "abrigo de lana",
        "precio": 200 +" $",
        "imagen": "./images/lana.jpg",
        "composicion": "53% lana",
        "tallas": [
          "xs",
          "s",
          "m",
          "l",
          "xl",
        ],
        
      },
      {
        "nombre": "acolchado",
        "precio": 250,
        "imagen": "img ./images/plumifero.jpg",
        "composicion": "53% lana",
        "tallas": [
          "xs",
          "s",
          "m",
        ]
      },
      {
        "nombre": "plumifero",
        "precio": 350,
        "imagen": "img ./images/acolchado.jpg",
        "composicion": "53% lana",
        "tallas": [
          "xs",
          "s",
          "m",
          "l",
        ]
      }
    ]
  }
  //-------------------------------
  function populateHeader() {
    
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj["tipo de prenda"];
    header.appendChild(myH1); 
  
    const myP = document.createElement('p');
    myP.textContent = 'lugar: ' + jsonObj.lugar + ' / tendencia: ' + jsonObj['tendencia'] +'/descripcion:'+ jsonObj.descripcion;
    header.appendChild(myP);
  }
  
  function show() {
    const articulos = jsonObj['articulos'];
  
    for (var i = 0; i < articulos.length; i++) {
      const myArticle = document.createElement('article');
      myArticle.textContent = articulos[i].nombre;
      
      const myP1 = document.createElement('p');
      myP1.textContent=articulos[i].precio;

      const myP2 = document.createElement('p');
      myP2.textContent=articulos[i].composicion

      const img=document.createElement('img')
      img.src= articulos[i].imagen;

      const myList = document.createElement('ul');
      

      const tallas = articulos[i].tallas;

      for (var j = 0; j < tallas.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = tallas[j];
        myList.appendChild(listItem);
      }
  
      
     myArticle.appendChild(myP1);
      myArticle.appendChild(myP2);
      myArticle.appendChild(img);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
//console.info(jsonObj)
//console.info(jsonObj.articulos[0].tallas[0])
 populateHeader()
  show()
