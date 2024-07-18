//npm i nodemailer
//import thu vien
const express=require('express');
const mailer=require('nodemailer');
const app43=express();//tao doi tuong express
//tao thong tin nguoi gui
let transporter=mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'taipvph36406@fpt.edu.vn',
        pass: 'hiij zvbm jase qiva'
    }
});
//noi dung can gui
let mailOption={
    from: 'phamvantai1908',
    to: 'tpgzin@gmail.com',
    subject: 'gui email cho chính tôi',
    text: 'Gửi ngày 15/7'
};
//thuc hien gui
transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log("Thanh cong: ",info.messageId);
    }
});
//lang nghe
app43.listen(3002,()=>{
    console.log("server dang chay o cong 3002");
});