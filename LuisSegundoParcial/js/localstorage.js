$(document).ready(function(){
    $('#box-form').submit(function(){
        var txt_user = $('#txt-user').val();
        var txt_password = $('#txt-password').val();

        //almacenar los valores dentro de localstorage
        localStorage.setItem('usuario',txt_user);
        localStorage.setItem('password',txt_password);
    });

    var txt_user = localStorage.getItem('usuario');
    var txt_password =localStorage.getItem('password');

    if(txt_user == 'admin' && txt_password == '12345'){
        window.location = 'registrarLibros.html';
		alert('bienvenido a la gestion de la biblioteca')
    }else if(txt_user == '' || txt_password == ''){
		alert('llene los campos');
	}else{
		alert('datos incorrectos');
	}
	
	
});

