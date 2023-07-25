const express = require ("express");
const app = express();
const mongoose = require ("mongoose");
app.use(express.json());
const cors=require ("cors");
app.use(cors());
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')


const JWT_SECRET = "KJHHSIHSF%TN$%#@%>g?rg>ggtrkgIRJGPOHAPIUDFJJTe>r$%#$%)3$t>et#'04<Sg>fggl;ORKGUUTEJG#$$#$ergr";



const mongoUrl="mongodb+srv://arjunsharmarke99:arjun99@cluster0.3b2sp0s.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
})
.then(()=>{
    console.log("connected to the database")

})

.catch((e)=> console.log(e));


require("./userDetails");

const user = mongoose.model("UserInfo");

app.post("/register", async(req, res)=>{
    const {fname , lname, email, password} = req.body;

const encryptpassword = await bcrypt.hash(password, 10);

    try{

         const olduser = await user.findOne({email});
        
        if(olduser){
          return  res.send({ error: " user already exist"});
        }


        await user.create({
           fname,
           lname,
           email,
           password: encryptpassword,

        });

        res.send({status:"ok"});
        
    }catch (error){
        res.send({status:"error"});
    }
    
});



app.post("/loginuser", async(req, res)=>{
    const { email , password} = req.body;

       const loginuser =  await user.findOne ({email});


    if(!loginuser){
        return  res.send({ error: " loginuser not found"});
      }
    if (await bcrypt.compare(password, loginuser.password)){
        const token=jwt.sign({}, JWT_SECRET);
        if(res.status(201)){
        return res.json({status:"ok", data: 
    
            token})
        
        } else {
            return res.json({error:"error"});
        }
    }
    res.json({ status: "error", error:"invalid password"});
})






app.listen(5000, ()=>{
    console.log("server started")
});






