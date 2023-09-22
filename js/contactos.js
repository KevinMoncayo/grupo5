const formulario = document.getElementById('form__contacto');
const inputs = document.querySelectorAll('#form__contacto input');
/*const textareas = document.querySelectorAll('#form__contacto textarea');*/

const expresiones = {
	/*usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo*/
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    /*comentarios: /^[a-zA-ZÀ-ÿ\s]{3,40}$/*/
}

const campos ={
    apellido: false,
    nombre:false,
    email:false,
    telefono:false,
  /*comentarios: false*/
}


const validarFormulario = (e) => {
    switch (e.target.name){
        case "apellido":
            validar_campo(expresiones.apellido, e.target, e.target.name);/* e.target = es el input del evento / e.target.name, es el nombre que tiene el input*/
        break;
        case "nombre":
            validar_campo(expresiones.nombre, e.target, e.target.name)
        break;
        case "telefono":
            validar_campo(expresiones.telefono, e.target, e.target.name)
        break;
        case "email":
            validar_campo(expresiones.email, e.target, e.target.name)
        break;
        /*case "comentarios":
            validar_comentario()
        break;*/ 
    }
}

const validar_campo = (expresion, input, campo)=>{ /* expresion, e.target, e.target.name */

    /*console.log("Apellido ok");*/
    if(expresion.test(input.value)){
        document.getElementById(`form_${campo}`).classList.remove('form__grupo_incorrecto');
        document.getElementById(`form_${campo}`).classList.add('form__grupo_correcto');
        document.querySelector(`#form_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#form_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#form_${campo} .form__input_error`).classList.remove('form__input_error_activo')

        campos[campo] = true;

    }else{
        /* Agrega una clase dentro de <div class="form__grupo (aca agrega la clase)" id="form_apellido"> */
        document.getElementById(`form_${campo}`).classList.add('form__grupo_incorrecto');

        /* Remoueve la clase dentro de <div class="form__grupo (remover clase form__grupo_correcto)" id="form_apellido"> */
        document.getElementById(`form_${campo}`).classList.remove('form__grupo_correcto');
        /* */
        document.querySelector(`#form_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#form_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#form_${campo} .form__input_error`).classList.add('form__input_error_activo')

        campos[campo] = false;
    }
}


/*const validar_comentario = ()=>{ 

        if(expresiones.comentarios.test(e.target.value)){
        document.getElementById('form_mensaje').classList.remove('form__grupo_incorrecto');
        document.getElementById('form_mensaje').classList.add('form__grupo_correcto');
 
        document.querySelector('form_mensaje .form__input_error').classList.remove('form__input_error_activo')

        campos[comentarios] = true;

    }else{
        
        document.getElementById('form_mensaje').classList.add('form__grupo_incorrecto');      
        document.getElementById('form_mensaje').classList.remove('form__grupo_correcto');
        
        document.querySelector('form_mensaje').classList.add('form__input_error_activo')

        campos[comentarios] = false;
    }
}*/


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

/*textareas.forEach((textarea) => {
	textareas.addEventListener('keyup', console.log("anda"));
	textareas.addEventListener('blur', validarFormulario);
});*/

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    if(campos.apellido && campos.nombre && campos.email && campos.telefono && campos.comentarios){
        formulario.reset();
    }

});
