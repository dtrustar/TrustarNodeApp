//get external dependencies
const {createServer}=require("http");
const {readFile}=require("fs");
const PORT=8080;
//create a server object
let server=createServer((req,res)=>{
	//parse the URLs
	let file4Url=req.url.substring(1).toLowerCase();
	//test paths
	if(file4Url=="index" || file4Url==""){
		readFile("index.html",{encoding:"utf8"},(err,data)=>{
			//check file 
			if(err){
				res.writeHead(404,{"Content-Type":"text/plain"});
				res.write("not found : "+file4Url);
				res.end();
			}
			else{
				res.writeHead(200,{"Content-Type":"text/html"});
				res.write(data);
				res.end();
			}
		});
	}
	else if(file4Url=="about"){
		readFile("about.html",{encoding:"utf8"},(err,data)=>{
			//check file 
			if(err){
				res.writeHead(404,{"Content-Type":"text/plain"});
				res.write("not found : "+file4Url);
				res.end();
			}
			else{
				res.writeHead(200,{"Content-Type":"text/html"});
				res.write(data);
				res.end();
			}
		});
	}
	else if(file4Url=="contact-me"){
		readFile("contact-me.html",{encoding:"utf8"},(err,data)=>{
			//check file 
			if(err){
				res.writeHead(404,{"Content-Type":"text/plain"});
				res.write("not found : "+file4Url);
				res.end();
			}
			else{
				res.writeHead(200,{"Content-Type":"text/html"});
				res.write(data);
				res.end();
			}
		});
	} 
	else{
		readFile("404.html",{encoding:"utf8"},(err,data)=>{
			//check file 
			if(err){
				res.writeHead(404,{"Content-Type":"text/plain"});
				res.write("not found "+file4Url);
				res.end();
			}
			else{
				res.writeHead(200,{"Content-Type":"text/html"});
				res.write(data);
				res.end();
			}
		});
	}
});


//server listening port

server.listen(PORT); 
console.log("listening! at port "+PORT);
