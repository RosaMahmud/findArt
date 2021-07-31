const mongoose = require ("mongoose");
const UserSchema = new mongoose.Schema({

    category:{
       type: String,
        default:'',
       
    },

    rating:{
      type: Array,
      default:[]
    },
      name:{
        type: String,
        trim: true,
        required: 'Please enter your name'
    },
      email:{
        type: String,
        unique: 'This email already exists', //email must be unique
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Please enter your email address'
    },
      password:{
        type: String,
        required: "Enter your password",
        min: 6
    },
      created: {
        type: Date,
        default: Date.now
      },
      ProfilePicture:{
        type: String,
        default: ""
      },

    bio: {
        type: String,
        trim:true
    },
    isClient: {
        type: Boolean,
        default: false
      },
      city: {
        type: String,
        trim:true
      },
    
    followers: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
    following: [{type: mongoose.Schema.ObjectId, ref: 'User'}]

},
{timestamps:true}
);

module.exports = mongoose.model("User", UserSchema);