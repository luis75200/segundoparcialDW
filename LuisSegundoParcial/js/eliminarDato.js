if (localStorage.getItem('isbn_Libros') != null) {
    var  aIsbn = JSON.parse(localStorage.getItem('isbn_Libros')),
         aTitulos = JSON.parse(localStorage.getItem('titulos_Libros')),
         aAutores = JSON.parse(localStorage.getItem('autores_Libros')),
         aEditoriales = JSON.parse(localStorage.getItem('editoriales_Libros')),
         aAnnoPublicacion = JSON.parse(localStorage.getItem('annos_Libros'));
}

var id =getUrlVars()['id'],
    nIsbn = aIsbn[id],
    sTitulo = aTitulos[id],
    sAutor = aAutores[id],
    sEditoral = aEditoriales[id],
    nAnno = aAnnoPublicacion[id],
    btnModificar =  document.querySelector('#btnModificar');    

      btnModificar.addEventListener('click', modificar);

      function modificar(){
        
            localStorage.removeItem(aIsbn[id])
            window.location.href = 'registrarLibros.html';
      }

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}