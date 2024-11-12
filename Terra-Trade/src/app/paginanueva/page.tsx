const addProperty = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (formRef.current) {
    const form = formRef.current;

    const newPropiedad = {
      id: Date.now(), // Generar un ID temporal usando la marca de tiempo
      nombre: form["propiedad-nombre"].value,
      direccion: form["propiedad-direccion"].value,
      barrio: form["propiedad-barrio"].value,
      precio: Number(form["propiedad-precio"].value),
      url_de_la_imagen: form["propiedad-imagen"].value,
    };

    // Añadir la propiedad al estado para mostrarla inmediatamente en el frontend
    setPropiedades([...propiedades, newPropiedad]);

    // Enviar la solicitud al servidor
    try {
      const res = await fetch('/api/propiedades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPropiedad),
      });

      if (res.ok) {
        const data = await res.json();
        console.log('Property added:', data);

        // Aquí podrías reemplazar el ID temporal con el ID real del servidor si es necesario
      } else {
        console.error('Failed to add property');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Reiniciar el formulario
    form.reset();
  }
};



