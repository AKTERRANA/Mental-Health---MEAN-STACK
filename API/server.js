const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const Professional = require('./models/professional.model');
const port = process.env.PORT || 3000;

// MIDDLEWARE   
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mongodb connect
 const MONGOURL = "mongodb://localhost:27017"
mongoose.connect(`mongodb://127.0.0.1/mentalhealth`,{useNewUrlParser:true, useUnifiedTopology:true}).then((resp)=>{
    console.log("MongoDb connected Successfully!")
}).catch((e)=>{
    console.log("There is an Error. =>",e)
})

app.get("/professionals", (req,res, next)=>{
     Professional.find().then((resp)=>{
            res.status(200).json(resp)
     }).catch((e)=>{
       next(e)
     })
})

app.post("/add-professional", (req,res, next)=>{
    const newProfessional = new Professional({
        name:req.body.name,
        age:req.body.age,
        fees:req.body.fees,
        newPatients:req.body.newPatients,
        conditions: req.body.conditions
    })

    newProfessional.save().then((savedDoc)=>{
        console.log("Document is saved. =>", savedDoc)
       res.status(200).json({message:"New Professional is saved."})
    })
})


// error handling
app.use((err,req, res, next)=>{
res.status(err.status|| 500);
res.json(error.message)
})

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})