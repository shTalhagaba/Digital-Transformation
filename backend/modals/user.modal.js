const mongoose = require("mongoose")

const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");


const userSchema = new mongoose.Schema({
    hash_password:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    salt: String,
    firstName:{
        type:String,
        trim:true,
        required:true,
    },
    lastName:{
        type:String,
        trim:true,
        required:true,
    },
    streetNumber:{
        type:String,
        trim:true,
        required:true,
    },
    streetName:{
        type:String,
        trim:true,
        required:true,
    },
    poBox:{
        type:String,
        trim:true,
        required:true,
    },
    city:{
        type:String,
        trim:true,
        required:true,
    },
    state:{
        type:String,
        trim:true,
        required:true,
    },
    zipCode:{
        type:String,
        trim:true,
        required:true,
    },
    country:{
        type:String,
        trim:true,
        required:true,
    },
    profile:{
        type:String,
        trim:true,
        required:true,
    },
}, {timestamps: true})

userSchema.virtual("password").set(function (password){
    this._password = password
    this.salt = uuidv4()
    this.hash_password = this.encryptPassword(password)
}).get(function (){
   return this._password
})

userSchema.methods = {
    encryptPassword:function(password){
        if(!password){
            return ""
        }
        else{
            try {
                return crypto.createHmac("sha256",this.salt).update(password).digest("hex")
            } catch (error) {
                return "";
            }
        }
    },
    authenticate:function(password){
        return this.encryptPassword(password) === this.hash_password
    }
}

module.exports = mongoose.model("Auth",userSchema)
