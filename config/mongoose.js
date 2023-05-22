const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017');

const db=mongoose.connection;


db.error('error',console.error.bind(console,"error in connecting with mongo db"));

db.once('open',()=>{
    console.log("successfully connected wothmongo db");
});


module.exports=db;