function inicio(respuesta){
	responder("Inicio", respuesta);
}

function pagina1(respuesta){
	responder("Pagina1", respuesta);
}

function pagina2(respuesta){
	responder("Pagina2", respuesta);
}

function pagina3(respuesta){
	responder("Pagina3", respuesta);
}

function favicon(respuesta){
	responder("Favicon", respuesta);
}

function responder(nombre, respuesta){
	console.log("Solicitud para "+ nombre);
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("<h1>Contenido de " + nombre + "</h1>");
	respuesta.end();
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.pagina3 = pagina3;
exports.favicon = favicon;