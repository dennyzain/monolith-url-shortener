import express,{Request,Response,Express,} from 'express';
const app:Express=express()

app.use(express.urlencoded({extended:true,limit:10000000}))
app.use(express.json())



const PORT=5000||process.env.PORT;

app.listen(()=>{
    console.log(`server running on port ${PORT}`)
})