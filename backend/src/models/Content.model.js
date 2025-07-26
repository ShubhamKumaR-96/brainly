const { Schema, model } = require("mongoose");


const contentSchema=new Schema({
    type:{
        type:String,
        enum:["document","tweet","youtube","link"],
        required:true
    },
    link:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    tags:{
        type:[String],
        default:[]
    }
},
{
    timestamps:true
})

contentSchema.pre("save", function (next) {
  if (this.tags && Array.isArray(this.tags)) {
    this.tags = this.tags.map(tag => tag.trim().toLowerCase());
  }
  next();
});

export const contentModel=model("Content",contentSchema)