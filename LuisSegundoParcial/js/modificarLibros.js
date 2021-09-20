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


      document.querySelector('#txtIsbn').value = nIsbn;
      document.querySelector('#txtTitulo').value = sTitulo;
      document.querySelector('#txtAutor').value = sAutor;
      document.querySelector('#txtEditorial').value = sEditoral;
      document.querySelector('#txtAnno').value = nAnno;

      btnModificar.addEventListener('click', modificar);

      function modificar(){
        var nIsbn = document.querySelector('#txtIsbn').value,
        sTitulo = document.querySelector('#txtTitulo').value,
        sAutor = document.querySelector('#txtAutor').value,
        sEditoral = document.querySelector('#txtEditorial').value,  
        nAnno = document.querySelector('#txtAnno').value;

            aIsbn[id] = nIsbn;
            aTitulos[id] = sTitulo;
            aAutores[id] = sAutor;
            aEditoriales[id] = sEditoral; 
            aAnnoPublicacion[id] = nAnno;

            guardarInformacion(aIsbn, aTitulos, aAutores, aEditoriales, aAnnoPublicacion);

            window.location.href = 'registrarLibros.html';
      }

      function guardarInformacion(paIsbn, paTitulos, paAutores, paEditoriales, paAnnoPublicacion){
        localStorage.setItem('isbn_Libros', JSON.stringify(paIsbn));
        localStorage.setItem('titulos_Libros', JSON.stringify(paTitulos));
        localStorage.setItem('autores_Libros', JSON.stringify(paAutores));
        localStorage.setItem('editoriales_Libros', JSON.stringify(paEditoriales));
        localStorage.setItem('annos_Libros', JSON.stringify(paAnnoPublicacion));
    }


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}