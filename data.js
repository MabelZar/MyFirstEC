const jsonObj = {
  "tipo de prenda": "Abrigos",
  lugar: "España",
  tendencia: 2023,
  descripcion: "Abrigos confeccionado con lana etc etc...",
  articulos: [
    {
      nombre: "abrigo de lana",
      precio: 200 + " $",
      imagen: "../images/lana.jpg",
      composicion: "composicion : 53% lana",
      categoria: "ABRIGOS",

      tallas: ["xs", "s", "m", "l", "xl"],
    },
    {
      nombre: "acolchado",
      precio: 250,
      imagen: "../images/plumifero.jpg",
      composicion: "composicion : 53% lana",
      categoria: "ABRIGOS",
      tallas: ["xs", "s", "m"],
    },
    {
      nombre: "plumifero",
      precio: 350,
      imagen: "../images/acolchado.jpg",
      composicion: "composicion : plumas",
      categoria: "ABRIGOS",
      tallas: ["xs", "s", "m", "l"],
    },
    {
      nombre: "bolso feo",
      precio: 777,
      imagen: "../images/bolso-solapa-bolitas.jpg",
      composicion: "composicion : cuero",
      categoria: "BOLSOS",
      tallas: ["tu"],
    },
  ],
};

const jsonCat = {
  categoria: [
    {
      idCategoria: 0,
      nombreCategoria: "abrigos"
    },
    {
      idCategoria: 2,
      nombreCategoria: "bolsos"
    },
    {
      idCategoria: 3,
      nombreCategoria: "pantalones"
    },
  ],
};
