if (localStorage.getItem('isbn_Libros') != null) {
        var  aIsbn = JSON.parse(localStorage.getItem('isbn_Libros')),
             aTitulos = JSON.parse(localStorage.getItem('titulos_Libros')),
             aAutores = JSON.parse(localStorage.getItem('autores_Libros')),
             aEditoriales = JSON.parse(localStorage.getItem('editoriales_Libros')),
             aAnnoPublicacion = JSON.parse(localStorage.getItem('annos_Libros'));
    }else{
        var aIsbn = ['1','2','3'],
        aTitulos= ['libro1', 'libro2', 'libro3'],
        aAutores= ['autor1', 'autor2', 'autor3'],
        aEditoriales= ['editorial1', 'editorial2', 'editorial3'],
        aAnnoPublicacion= ['año1', 'año2', 'año3'];

        guardarInformacion(aIsbn, aTitulos, aAutores, aEditoriales, aAnnoPublicacion);
    }
 
    
var elementoBotonRegistrar = document.querySelector('#btnRegistrar'); 

elementoBotonRegistrar.addEventListener('click', registrarLibro);

function registrarLibro(){
    var nIsbn = document.querySelector('#txtIsbn').value,
        sTitulo = document.querySelector('#txtTitulo').value,
        sAutor = document.querySelector('#txtAutor').value,
        sEditoral = document.querySelector('#txtEditorial').value,
        nAnno = document.querySelector('#txtAnno').value;

    aIsbn.push(nIsbn);
    aTitulos.push(sTitulo);
    aAutores.push(sAutor);
    aEditoriales.push(sEditoral);
    aAnnoPublicacion.push(nAnno);

    guardarInformacion(aIsbn, aTitulos, aAutores, aEditoriales, aAnnoPublicacion);

    llenarTabla();
}
function guardarInformacion(paIsbn, paTitulos, paAutores, paEditoriales, paAnnoPublicacion){
    localStorage.setItem('isbn_Libros', JSON.stringify(paIsbn));
    localStorage.setItem('titulos_Libros', JSON.stringify(paTitulos));
    localStorage.setItem('autores_Libros', JSON.stringify(paAutores));
    localStorage.setItem('editoriales_Libros', JSON.stringify(paEditoriales));
    localStorage.setItem('annos_Libros', JSON.stringify(paAnnoPublicacion));
}


