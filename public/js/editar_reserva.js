// Referencia al formulario
const formEditar = document.querySelector('#formEditar');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const destino = document.querySelector('#destino');
const fechaSalida = document.querySelector('#fechaSalida');
const fechaRegreso = document.querySelector('#fechaRegreso');
const reservaId = formEditar.dataset.id;

// Funcion para obtener los datos de la  cuando se carga la página
document.addEventListener('DOMContentLoaded', async () => {

    console.log('DOM cargado');
    
    try {
        
        const response =  await fetch(`http://localhost:4000/api/reserva/${reservaId}`);

        // Si hubo un error al obtener los datos de un usuario
        if (!response.ok) {
            throw ({
                message: 'Error al obtener datos de la reserva'
            })
        }

        // Se obtienen los datos de la respuesta (fetch)
        const {nombre,apellido, email, destino, fechaSalida, fechaRegreso} = await response.json();

        console.log({nombre,apellido, email, destino, fechaSalida, fechaRegreso})

        const nombreInput = document.getElementById('nombre')
        const apellidoInput = document.getElementById('apellido')
        const emailInput = document.getElementById('email')
        const destinoInput = document.getElementById('destino')
        const fechaSalidaInput = document.getElementById('fechaSalida')
        const fechaRegresoInput = document.getElementById('fechaRegreso')


        nombreInput.value = nombre;
        apellidoInput.value = apellido;
        emailInput.value = email;
        destinoInput.value = destino;
        fechaSalidaInput.value = fechaSalida;
        fechaRegresoInput.value = fechaRegreso;

    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
        })
    }

});


// Escuchar el evento submit
formEditar.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Se crea un objeto con los datos del formulario
    const formData = {
        nombre: e.target.nombre.value,
        apellido: e.target.apellido.value,
        email: e.target.email.value,
        destino: e.target.destino.value,
        fechaSalida: e.target.fechaSalida.value,
        fechaRegreso: e.target.fechaRegreso.value,
    }

    try {
        // Se envia la peticion al servidor
        const resp = await fetch(`http://localhost:4000/api/reserva/${reservaId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (resp.status !== 200) {
            throw ({
                message: 'Error al editar la reserva'
            })
        }

        const data = await resp.json();

        Swal.fire({
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(() => {
            window.location.href = '/';
        }, 1500);

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: error.message,
            timer: 2000,
        })
    }
});