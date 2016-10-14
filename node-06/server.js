var moment = require('moment');
var http = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar, request){
	function arrancarServidor(peticion, respuesta){
		
		console.log("Se ha conectado un cliente a las "  + moment().format() + "\n");
		
		var ruta = url.parse(peticion.url).pathname;
		
		
		//enrutar(ruta, request, respuesta);
		if(ruta == "/"){
			ruta = "index.html";
		}
		
		try{
			var html = fs.readFileSync("www/" + ruta);
		}catch(err){
			ruta = "index.html";
			var html = fs.readFileSync("www/" + ruta);
		}
		
		
		var archivo_accesos = fs.createWriteStream("accesos.txt", {"flags":"a"});
		archivo_accesos.write("\n" + ruta + " - " + moment().format() + "\n");
		
	
		respuesta.writeHead(200,{"Content-Type":"text/html"});
		
		
		respuesta.write(html);
		respuesta.end();
	}
	http.createServer(arrancarServidor).listen(8080);
	console.log("Servidor web iniciado." + "\n");
}
exports.iniciar = iniciar;