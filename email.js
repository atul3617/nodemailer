const http=require('http')
const fs=require('fs')
const {parse}=require('querystring')
const nodemailer=require('nodemailer')

http.createServer((req,res)=>{
    if(req.method==='POST'){
        if(req.headers['content-type']==='application/x-www-form-urlencoded'){
            //data
            let body=''
            req.on("data",(chunk)=>{
                body+=chunk
            })
            // end
            req.on("end",()=>{
                let email=parse(body).email;
                const transporter=nodemailer.createTransport({
                    host:'smtp.ethereal.email',
                    port:587,
                    // secure:false,//it not necesary to give but pass false 
                auth:{
                    user: 'treva.wolff2@ethereal.email',
                    pass: 'vDFeWrRmnMatCMQT7g'
                }
                })
               transporter.sendMail({
                    from:"treva.wolff2@ethereal.email",
                    to:email,
                    subject:"danger!!!!!",
                    html:'<h1>Hide for sometime</h1>',
                    text:"be safe this is a confidential mail"
                } )
                res.end('mail send')
            })
          
        }else{
            res.end(null)
        }
 }else{
        if(req.url==='/' ||req.url==='/home'){
            res.writeHead(200,"ok",{'content-type':'text/html'})
            let html=fs.createReadStream("./index.html","utf-8")
            html.pipe(res)
        }
        else
        {
            console.log("page not found");}
    }
}).listen(5000,()=>{
    console.log("server@5000....");
})