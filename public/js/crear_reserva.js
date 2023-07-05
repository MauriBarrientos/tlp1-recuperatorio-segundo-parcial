const formNuevaReserva = document.querySelector('#formNuevaReserva');

formNuevaReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const destino = document.querySelector('#destino').value;
    const fechaRegreso = document.querySelector('#fechaRegreso').value;
    const fechaSalida = document.querySelector('#fechaSalida').value;

    const nuevaReserva = {
        nombre,
        apellido,
        email,
        destino,
        fechaRegreso,
        fechaSalida,
    }

    try {
        const res = await fetch('http://localhost:4000/api/reserva', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nuevaReserva)
        });

        const data = await res.json();
        console.log({ data });
        formNuevaReserva.reset();
        
        Swal.fire({
            icon: 'success',
            title: 'Reserva creada',
            text: 'La reserva se ha creado correctamente'
        })

      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message
        })
    }
})