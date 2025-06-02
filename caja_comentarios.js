/*
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los comentarios deben aparecer junto con la fecha y hora de publicación.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
*/


/*
document.getElementById("button_enviar_comentario").addEventListener('click', function imprimir () {
    
    const comentariojs = document.getElementById("comentario").value;
    //const fecha_horajs =document.getElementById("fecha_hora").value;
    const ahora = new Date();
    const fecha_horajs = ahora.toLocaleString();
    
    const resultados = `
        <strong>Lista de comentarios:</strong><br>
        Comentario: ${comentariojs} ${fecha_horajs}
    `;

    document.getElementById("cometarios_impresos").innerHTML = resultados;
});
*/

const lista_comentarios = [];


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button_enviar_comentario").addEventListener('click', agregar_comentario);
});


function agregar_comentario() {
    const comentariosjs = document.getElementById("comentario").value;

    if (!comentariosjs.trim()) {
        alert("Debes escribir un comentario");
        return;
    }


    //obtener fecha y hora actual y con un buen formato
    const ahora = new Date();
    const opciones = {
        day: '2-digit',
        month:'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    const fecha_hora = ahora.toLocaleString('es-ES', opciones);


    //guardamos como objeto para poder eliminar por indice
    lista_comentarios.push({
        texto: comentariosjs,
        fecha: fecha_hora
    });

    mostrar_comentarios();
    
    document.getElementById("comentario").value = "";
    alert("Comentario enviado");
}


function mostrar_comentarios() {
    let mostrar_comentarios =  "<strong><br>Comentarios:</strong><br>";

    lista_comentarios.forEach((comentario, index) => {
        mostrar_comentarios += `
            <div>
                ${comentario.texto}
                <small><span style= "color: orange;"><em>(${comentario.fecha})</em></span></small>
                <button onclick="eliminar_comentario(${index})">Eliminar</button><br><br>
            </div>
            <hr>
        `;
    });

    const contenedor_comentarios = document.getElementById("comentarios_impresos");

    contenedor_comentarios.innerHTML = mostrar_comentarios;

    //mostrar el div comentarios_imopresos solo si hay comentarios
    if (lista_comentarios.length > 0) {
        contenedor_comentarios.style.display= "block";
    } else {
        contenedor_comentarios.style.display = "none";
    }
}


function eliminar_comentario(indice) {
    //elimina 1 comentario desde la posicion indice
    lista_comentarios.splice(indice,1);
    mostrar_comentarios();
}
