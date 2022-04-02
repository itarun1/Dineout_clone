const mongoose= require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://dineout:dineout@cluster0.b7zyg.mongodb.net/dineout")
}
