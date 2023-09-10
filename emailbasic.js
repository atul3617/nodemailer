const nodemailer=require('nodemailer')

const transport=nodemailer.createTransport({
    host:'smtp.ethereal.email',
    port:587,
    secure:false,
auth:{
    user: 'forrest.romaguera20@ethereal.email',
    pass: 'WBnaJ2BVcMPWJ4z73s'
}
})
let message={
    from:"atulshukla36171@gmail.com",
    to:"forrest.romaguera20@ethereal.email",
    subject:"danger!",
    html:'<h1>Hide for sometime</h1>',
    text:"be safe this is a confidential mail"
}
transport.sendMail(message,(err)=>{
    if(err)
        console.log(err);
    else
    console.log("message deliverd");
})
