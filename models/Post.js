const mongoose = require ("mongoose");
const postSchema = new mongoose.Schema({
    
  caption: {
    type: String,
    required: 'Text is required'
  },
userId:{
    type:String,
    required: true
},

  photo: {
    data: Buffer,
    type: String
  },
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}],
  comments: [{
    text: String,
    created: { type: Date, default: Date.now },
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
  }],
  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  created: {
    type: Date,
    default: Date.now
  }

},
{timestamps:true}
);

module.exports = mongoose.model("Post", postSchema);