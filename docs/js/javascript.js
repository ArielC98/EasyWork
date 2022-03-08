function cargar(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById("main-containerjob").innerHTML = html;
    })
}

function header() {
  fetch("header.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
    })
}

function loadjson(jsonurl) {
  document.getElementById("main-containerjob").innerHTML = "";
  fetch("./data/" + jsonurl)
    .then(response => response.json())
    .then(data => {
      let div = document.createElement("div")
      div.classList.add("card-containerjob");
      for (id in data) {
        dato = data[id];
        let jobid = id;
        let table = document.createElement("table");
        table.style.cursor = "pointer";
        table.addEventListener("click", () => confirmar(dato));
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.style.backgroundColor = "#030649";
        th.style.height = "40px";
        th.colSpan = 2;
        let a = document.createElement("a");
        a.style.color = "white";
        a.style.textDecoration = "none";
        a.innerText = data[id].titulo;
        th.append(a);
        tr.append(th);
        table.append(tr);
        tr = document.createElement("tr");
        th = document.createElement("th");
        th.style.backgroundColor = "#C4C4C4";
        th.style.color = "#030649";
        th.style.height = "20px";
        th.innerText = data[id].sector;
        tr.append(th);
        th = document.createElement("th");
        th.style.backgroundColor = "white";
        th.style.color = "#030649";
        th.style.height = "20px";
        th.innerText = "$" + data[id].pago;
        tr.append(th);
        table.append(tr);
        div.append(table)
      }
      document.getElementById("main-containerjob").append(div);
    })
}

function confirmar(dato) {
  document.getElementById("main-containerjob").innerHTML = "";
  let div = document.createElement("div");
  div.classList.add("tipoTrabajo");
  let img = document.createElement("img");
  img.classList.add("img");
  img.src = dato.img;
  img.alt = dato.titulo;
  let div2 = document.createElement("div");
  div2.classList.add("InfOficio");
  let h4 = document.createElement("h4");
  h4.innerText = dato.descripcion;
  div2.append(h4);
  div.append(img);
  div.append(div2);
  let botonAceptar = document.createElement("button");
  botonAceptar.addEventListener("click", () => aceptar(dato));
  botonAceptar.classList.add("btnAceptar");
  let h1 = document.createElement("h1");
  h1.innerText = "Aceptar";
  botonAceptar.append(h1);
  let botonRechazar = document.createElement("button");
  botonRechazar.addEventListener("click", () => cargar('BuscarTrabajo.html'));
  botonRechazar.classList.add("btnRechazar");
  h1 = document.createElement("h1");
  h1.innerText = "Rechazar";
  botonRechazar.append(h1);
  document.getElementById("main-containerjob").append(div);
  document.getElementById("main-containerjob").append(botonAceptar);
  document.getElementById("main-containerjob").append(botonRechazar);
}

function aceptar(dato) {
  document.getElementById("main-containerjob").innerHTML = "";
  let h1 = document.createElement("h1");
  h1.style.color = "#030649";
  h1.innerText = "Usted ha aceptado el trabajo";
  document.getElementById("main-containerjob").append(h1);
  let outerdiv = document.createElement("div");
  outerdiv.classList.add("tipoTrabajo");
  let titulodiv = document.createElement("div");
  titulodiv.classList.add("DetailJob");
  let descdiv = document.createElement("div");
  descdiv.classList.add("ContentDetailJob");
  let h4 = document.createElement("h4");
  h4.style.margin = "8px";
  h4.innerHTML = "Ubicación";
  titulodiv.append(h4);
  h4 = document.createElement("h4");
  h4.style.margin = "8px";
  h4.innerHTML = dato.direccion;
  descdiv.append(h4);
  outerdiv.append(titulodiv);
  outerdiv.append(descdiv);
  document.getElementById("main-containerjob").append(outerdiv);

  outerdiv = document.createElement("div");
  outerdiv.classList.add("tipoTrabajo");
  titulodiv = document.createElement("div");
  titulodiv.classList.add("DetailJob");
  descdiv = document.createElement("div");
  descdiv.classList.add("ContentDetailJob");
  h4 = document.createElement("h4");
  h4.style.margin = "8px";
  h4.innerHTML = "Contacto";
  titulodiv.append(h4);
  h4 = document.createElement("h4");
  h4.style.margin = "8px";
  h4.innerHTML = dato.contacto + " (" + dato.telefono + ")";
  descdiv.append(h4);
  outerdiv.append(titulodiv);
  outerdiv.append(descdiv);
  document.getElementById("main-containerjob").append(outerdiv);

  outerdiv = document.createElement("div");
  outerdiv.classList.add("tipoTrabajo");
  outerdiv.style.marginBottom = "40px";
  titulodiv = document.createElement("div");
  titulodiv.classList.add("DetailJob");
  descdiv = document.createElement("div");
  descdiv.classList.add("ContentDetailJob");
  h4 = document.createElement("h4");
  h4.style.margin = "8px";
  h4.innerHTML = "Tiempo límite";
  titulodiv.append(h4);
  h4 = document.createElement("h4");
  h4.style.margin = "8px";
  h4.innerHTML = dato.limite;
  descdiv.append(h4);
  outerdiv.append(titulodiv);
  outerdiv.append(descdiv);
  document.getElementById("main-containerjob").append(outerdiv);

  let botonAceptar = document.createElement("button");
  botonAceptar.addEventListener("click", () => cargar('BuscarTrabajo.html'));
  botonAceptar.classList.add("btnAceptar");
  h1 = document.createElement("h1");
  h1.innerText = "Aceptar";
  botonAceptar.append(h1);
  document.getElementById("main-containerjob").append(botonAceptar);
}