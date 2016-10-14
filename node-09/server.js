var stream = require('stream');

const http = require('http');

const server = http.createServer((req, res) => {
	'use strict';
	let body = '';
	
	req.setEncoding('utf8');
	
	req.on('data', (chunk) => {
		
		body += chunk;
	});




	req.on('end', () => {
			try{
				const data = JSON.parse(body);
				
				res.write(typeof data);
				res.end();
			}catch(er){
				res.statusCode = 400;
				return res.end("error:  ${er.message}");
			}
		});
	});

server.listen(1337);