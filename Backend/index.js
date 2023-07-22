const express=require('express');
const cors=require('cors');
const route=require('./router/route.js');

const app=express();

const port=process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',route);

app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
})