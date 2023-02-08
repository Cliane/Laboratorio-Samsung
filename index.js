
//=========================================================================================================================================================================
//  AUTHOR:                Estrella Moraleda Hernández
//  CREATED DATE:          24-01-2023
//  LAST MODIFIED DATE:    08-02-2023
//  FUNCTIONALITY:         Controlar la creación de un formulario de modo que los campos introducidos tengan un formato adecuado
//=========================================================================================================================================================================

//_________________________________________________________________________________________________________________________________________________________________________
//Primero vamos a declarar variables globales que utilizaremos a lo largo del desarrollo del programa 
  let arrayResults = [];
  let errorMessage = "Rellene este campo";
  
//_________________________________________________________________________________________________________________________________________________________________________
//En la primera función comprobaremos que el campo nombre cumple los requesitos, que en este caso es no estar vacio.

function validateName(inputId, textId, errorClass, successClass) {
  const input = document.getElementById(inputId);
  const errorText = document.getElementById(textId);
  
  if (!input.value) {

    input.className = errorClass;
    errorText.innerHTML = errorMessage;
    arrayResults.push("error");

  } else {

    input.className = successClass;
    errorText.innerHTML = "";

  }
}

//_________________________________________________________________________________________________________________________________________________________________________
//En estas funciones validaremos que el email introducido posee un formato adecuado y que además el campo no esta vacio.

function validateEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

function validateEmailInput(inputId, textId, errorClass, successClass) {
  const input = document.getElementById(inputId);
  const errorText = document.getElementById(textId);

  if (!input.value) {

    input.className = errorClass;
    errorText.innerHTML = errorMessage;
    arrayResults.push("error");

  } else if (!validateEmail(input.value)) {
    input.className = "error";
    errorText.innerHTML = "Email inválido";
    input.title = "Incluye un signo \"@\" en la dirección de correo electrónico. La dirección \"" + input.value + "\" no incluye el signo \"@\" ";
    arrayResults.push("error");

  } else {
    input.className = successClass;
    errorText.innerHTML = "";
  }
}

//_________________________________________________________________________________________________________________________________________________________________________
//En esta funciópn se comprobará que el campo contraseña introducido no posee más de 8 caracteres y que no esta vacio

function validatePassword(inputId, textId, errorClass, successClass){
    let password = document.getElementById(inputId);
    let passwordLength = password.value.length;
    let passwordMessage = document.getElementById(textId);
  
    if (!password.value) {
      password.className = errorClass;
      passwordMessage.innerHTML = errorMessage;
      arrayResults.push("error");

    } else if (passwordLength > 8) {
      password.className = errorClass;
      passwordMessage.innerHTML = "No debe tener más de 8 caracteres";
      arrayResults.push("error");

    } else {
      password.className = successClass;
      passwordMessage.innerHTML = "";
    }
  }

//_________________________________________________________________________________________________________________________________________________________________________
//Por ultimo, se validará el ultimo campo de confirmacion de la contraseña de modo coincida con el campo clave introducido anteriormente y que no este vacio

function validateConfirmation(inputId, referenceId, textId, errorClass, successClass) {
    let confirmation = document.getElementById(inputId);
    let password = document.getElementById(referenceId);
    let confirmationMessage = document.getElementById(textId);
  
    if (!confirmation.value) {
      confirmation.className = errorClass;
      confirmationMessage.innerHTML = errorMessage;
      arrayResults.push("error");

    } else if (password.value !== confirmation.value) {

      confirmation.className = errorClass;
      confirmationMessage.innerHTML = "Las contraseñas no coinciden";
      arrayResults.push("error");

    } else {
      confirmation.className = successClass;
      confirmationMessage.innerHTML = "";
    }
}

//_________________________________________________________________________________________________________________________________________________________________________
//Por ultimo, se ha creado esta funcion para unificar las anteriores funciones mencionadas de modo que podamos localizar donde se están ejecutando con mayor rapidez.
//Además se han diseñado las funciones de modo que, en caso de ser necesario modificarlas posteriormente, solo haya que cambiar los inputs y no sea necesario buscar las variables en el código.

function checkData() {
  validateName("nombre", "textoNombre", "error", "success");
  validateEmailInput("email", "textoEmail", "error", "success");
  validatePassword("clave", "textoClave", "error", "success");
  validateConfirmation("confirmacion", "clave", "textoConfirmacion", "error", "success");
  
//Para finalizar, se comprueba que todos los campos cumplen los requisitos exigidos y se muestra la alerta por pantalla indicando que la inscripción es correcta.
  if (arrayResults.length === 0) {
    alert("La inscripción ha sido correcta.");
  }
  arrayResults = [];
}