document.addEventListener("DOMContentLoaded", function () {
  const buscador = document.getElementById("buscador");
  const listaNombres = document.querySelectorAll(".nombre");
  const nombreProfesion = document.getElementById("nombreProfesion");
  const descripcion = document.getElementById("descripcion");
  const experiencia = document.getElementById("experiencia");
  const profesionSeleccionada = document.getElementById("profesionSeleccionada");
  const listaNombresContainer = document.getElementById("listaNombres");
  const tarjetasGuardadas = document.getElementById("tarjetasGuardadas");
  const btnEliminar = document.getElementById("btnEliminar");

  // Crear un conjunto para almacenar los nombres y profesiones seleccionados
  const nombresSeleccionados = new Set();
  const profesionesSeleccionadas = new Set();

  // Oculta la lista de nombres y profesiones inicialmente
  listaNombresContainer.style.display = "none";

  btnEliminar.addEventListener("click", function () {
    // Borra la tarjeta seleccionada
    const tarjetaSeleccionada = profesionSeleccionada.querySelector(".tarjeta");
    const nombreTarjetaSeleccionada = tarjetaSeleccionada.getAttribute("data-nombre");
    const profesionTarjetaSeleccionada = tarjetaSeleccionada.getAttribute("data-profesion");
    tarjetasGuardadas.removeChild(tarjetaSeleccionada);

    // Elimina el nombre y profesión seleccionados del conjunto
    nombresSeleccionados.delete(nombreTarjetaSeleccionada);
    profesionesSeleccionadas.delete(profesionTarjetaSeleccionada);

    // Vuelve a mostrar el nombre seleccionado en la lista
    nombre.style.display = "block";
    profesionSeleccionada.style.display = "none";
  });

  buscador.addEventListener("input", function () {
    const valorBuscado = buscador.value.toLowerCase();
    const alMenosUnaLetra = valorBuscado.trim().length > 0;

    if (alMenosUnaLetra) {
      // Muestra la lista de nombres y profesiones cuando se ingresa al menos una letra
      listaNombresContainer.style.display = "block";

      listaNombres.forEach((nombre) => {
        const nombreTexto = nombre.textContent.toLowerCase();

        if (nombreTexto.includes(valorBuscado) && !nombresSeleccionados.has(nombreTexto)) {
          nombre.style.display = "block";
        } else {
          nombre.style.display = "none";
        }
      });
    } else {
      // Si no se ingresa ninguna letra, oculta la lista y la tarjeta
      listaNombresContainer.style.display = "none";
      nombreProfesion.textContent = "";
      descripcion.textContent = "";
      experiencia.textContent = "";
    }
  });

  listaNombres.forEach((nombre) => {
    nombre.addEventListener("click", function () {
      const profesion = nombre.getAttribute("data-profesion");
      const nombreTexto = nombre.textContent.toLowerCase();

      // Verificar si el nombre y la profesión ya se han seleccionado
      if (!nombresSeleccionados.has(nombreTexto) && !profesionesSeleccionadas.has(profesion)) {
        // Agrega aquí los datos de cada profesión
        switch (profesion) {
          case "Ingeniero":
            nombreProfesion.textContent = "Ingeniero";
            descripcion.textContent = "Especializado en ingeniería civil.";
            experiencia.textContent = "Experiencia: 10 años";
            break;
          case "Asistente":
            nombreProfesion.textContent = "Asistente";
            descripcion.textContent = "Asistente administrativo.";
            experiencia.textContent = "Experiencia: 5 años";
            break;
            case "Mecanico":
              nombreProfesion.textContent = "Mecanico";
              descripcion.textContent = "Especializado en desarmar.";
              experiencia.textContent = "Experiencia: 20 años";
              break;
           case "Mercaderista":
              nombreProfesion.textContent = "Mercaderista";
              descripcion.textContent = "Especializada en ventas.";
              experiencia.textContent = "Experiencia: 3 años";
              break;
          case "Conductor":
              nombreProfesion.textContent = "Conductor";
              descripcion.textContent = "Especializado en conducir autos.";
              experiencia.textContent = "Experiencia: 2 años";
              break;
          case "Programador":
              nombreProfesion.textContent = "Programador";
              nombrePersona.textContent = "David";
              descripcion.textContent = "Especializado en programar.";
              experiencia.textContent = "Experiencia: 3 semanas";
              break;
          // Agrega más casos para otras profesiones aquí
          default:
            nombreProfesion.textContent = "";
            descripcion.textContent = "";
            experiencia.textContent = "";
            break;
        }

        // Crea una tarjeta y añádela al contenedor de tarjetas guardadas
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = `
          <h2>Profesión: ${profesion}</h2>
          <p>Nombre: ${nombre.textContent}</p>
          <p>Descripción: ${descripcion.textContent}</p>
          <p>Experiencia: ${experiencia.textContent}</p>
          <button class="btnEliminar">Eliminar</button>
        `;
        
        tarjeta.setAttribute("data-nombre", nombreTexto);
        tarjeta.setAttribute("data-profesion", profesion);

        tarjetasGuardadas.appendChild(tarjeta);

        // Agrega el nombre y profesión al conjunto
        nombresSeleccionados.add(nombreTexto);
        profesionesSeleccionadas.add(profesion);

        // Agrega un evento para eliminar la tarjeta
        const btnEliminarTarjeta = tarjeta.querySelector(".btnEliminar");
        btnEliminarTarjeta.addEventListener("click", function () {
          tarjetasGuardadas.removeChild(tarjeta);

          // Elimina el nombre y profesión del conjunto al eliminar la tarjeta
          nombresSeleccionados.delete(nombreTexto);
          profesionesSeleccionadas.delete(profesion);

          // Vuelve a mostrar el nombre seleccionado en la lista
          nombre.style.display = "block";
        });
      }

      // Oculta el nombre seleccionado en la lista
      nombre.style.display = "none";

      // Muestra la tarjeta seleccionada
      profesionSeleccionada.style.display = "block";
    });
  });
});

