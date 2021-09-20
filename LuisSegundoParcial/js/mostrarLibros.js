llenarTabla();

function llenarTabla(){
var tbody = document.querySelector('#tblLibros tbody');

tbody.innerHTML = '';

var aIsbn = JSON.parse(localStorage.getItem('isbn_Libros')),
    aTitulos = JSON.parse(localStorage.getItem('titulos_Libros')),
    aAutores = JSON.parse(localStorage.getItem('autores_Libros')),
    aEditoriales = JSON.parse(localStorage.getItem('editoriales_Libros')),
    aAnnoPublicacion = JSON.parse(localStorage.getItem('annos_Libros'));
    
let nCantidadLibros = aIsbn.length;

for (var i = 0; i < nCantidadLibros; i++){ 

    var fila = document.createElement('tr');

    var celdaIsbn = document.createElement('td'),
        celdaTitulo = document.createElement('td'),
        celdaAutor = document.createElement('td'),
        celdaEditorial = document.createElement('td'),
        celdaAnno = document.createElement('td'),
        celdaModificar = document.createElement('td'),
        enlaceModificar = document.createElement('a');

        enlaceModificar.href = 'modificarLibros.html';

        celdaModificar.setAttribute('class', 'btnModificar');
        celdaModificar.setAttribute('id', i)
        enlaceModificar.href = 'modificarLibros.html?id' + '=' + i

    var nodoTextoIsbn = document.createTextNode(aIsbn[i]),
        nodoTextoTitulo = document.createTextNode(aTitulos[i]),
        nodoTextoAutor = document.createTextNode(aAutores[i]),
        nodoTextoEditorial = document.createTextNode(aEditoriales[i]),
        nodoTextoAnno = document.createTextNode(aAnnoPublicacion[i]),
        
        nodoTextoModificar = document.createTextNode('Modificar');


        celdaIsbn.appendChild(nodoTextoIsbn);
        celdaTitulo.appendChild(nodoTextoTitulo);
        celdaAutor.appendChild(nodoTextoAutor);
        celdaEditorial.appendChild(nodoTextoEditorial);
        celdaAnno.appendChild(nodoTextoAnno);

        enlaceModificar.appendChild(nodoTextoModificar);
        celdaModificar.appendChild(enlaceModificar);

      fila.appendChild(celdaIsbn);
      fila.appendChild(celdaTitulo);
      fila.appendChild(celdaAutor);
      fila.appendChild(celdaEditorial);
      fila.appendChild(celdaAnno);
      fila.appendChild(celdaModificar);

     
tbody.appendChild(fila);
} 

}