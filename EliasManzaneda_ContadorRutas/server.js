var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require("querystring");

var peticion = {};

function iniciar(enrutar, request){
	var numConexion = 0;
	function arrancarServidor(peticion, respuesta){
		numConexion++;

		var ruta = url.parse(peticion.url).pathname;
		console.log("Se pide la ruta " + ruta);
		console.log("Total de visitas: " + numConexion);

		if(ruta == "/closeServer"){
			console.log("Fin del servidor");
			process.exit(1);
		}
					
	}
	http.createServer(arrancarServidor).listen(8080);

}
iniciar(peticion);
