var moment = require('moment');

function enrutar(ruta, request, respuesta){
	console.log("Rutear a " + ruta + " a las " + moment().format() + "\n");
	if(typeof request[ruta] === "function"){
		return request[ruta](respuesta);
	}else{
		console.log("ups");
		respuesta.writeHead(404, {"Content-Type":"text/html"});
		respuesta.write("<h1>404 - Pagina no encontrada.</h1>");
		respuesta.end();
	}
	console.log("Ruteo acabado a las " + moment().format());
}
exports.enrutar = enrutar;