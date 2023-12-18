const express = require('express');
const bodyParser = require('body-parser');
const qrImage =require('qr-image');
const cors=require('cors');
const app = express();
app.use(cors());

app.listen(3000,()=>console.log('listening to port 3000'));

app.use(bodyParser.json());

app.post('/generateQR',(req,res)=>{
   const data=req.body.data;
console.log(data);
try {
 const qrCode=qrImage.image(data,{type:'svg'});
 res.setHeader('Content-Type', 'image/svg');
qrCode.pipe(res);
} catch (error) {
   console.log(error); 
}
});

