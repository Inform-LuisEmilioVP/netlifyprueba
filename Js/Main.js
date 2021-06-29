/** Costantes */
const names = document.getElementById('names');
const email = document.getElementById('email');
const message = document.getElementById('message');
const btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', () => {
	let error = '';

	//Validar que los Campos requeridos esten llenos
	if (names.value == '' && email.value == '' && message.value == '') {
		error += Swal.fire(
			'Error',
			'Es necesario llenar los campos requeridos!',
			'error'
		);
	} else if (names.value == '') {
		//	Validacion del Nombre =============================
		error += Swal.fire('Error', 'Debe escribir un Nombre!', 'error');
	} else if (email.value == '') {
		// 	// Validacion del Correo =============================
		error += Swal.fire('Error', 'Debe ingresar un Correo!', 'error');
	} else if (message.value == '') {
		// Validacion del Mensaje ============================
		error += Swal.fire('Error', 'Escriba un Mensaje!', 'error');
	}
});
