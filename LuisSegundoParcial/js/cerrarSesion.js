
	var cerrar =  document.querySelector('#btnCerrarSesion');
      cerrar.addEventListener('click', CerrarSesion);

      function CerrarSesion(){
            window.location.href = 'index.html';
			
			localStorage.removeItem('usuario');
			localStorage.removeItem('password');
			
      }

