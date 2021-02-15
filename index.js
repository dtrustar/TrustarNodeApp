const http=require("http");
const fs=require("fs");
//how to get files
function getFile(fileName){
	fs.readFile(fileName,(err,data)=>{
		if(err){
			return 0;
		}
		return data;

	});
}
const server=http.createServer((req,res)=>{
	let url=req.url;
	let responseData='';

	//check what to do with the URLs 
	if(url==="/"){
		responseData=getFile("index.html");
	}
	else if(url==="/about"){
		responseData("about.html");
	}
	else if(url==="/contact-me"){
		responseData=getFile("contact-me.html");
	}
	else{
		responseData=getFile("404.html");
	}

	//then respond to request
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write(responseData);
	res.end();
});
server.listen(5500);