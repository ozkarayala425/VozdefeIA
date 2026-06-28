function responder() {
  let texto = document.getElementById("input").value;

  let respuesta = "";

  if (texto.includes("Dios")) {
    respuesta = "Dios te ama y nunca te abandona ❤️";
  } 
  else if (texto.includes("miedo")) {
    respuesta = "No temas, Dios está contigo (Isaías 41:10)";
  } 
  else if (texto.includes("fe")) {
    respuesta = "La fe mueve montañas (Mateo 17:20)";
  } 
  else {
    respuesta = "Clama a mí y yo te responderé (Jeremías 33:3)";
  }

  document.getElementById("respuesta").innerText = respuesta;
}
