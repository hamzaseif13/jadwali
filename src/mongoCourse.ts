import mongoose from "mongoose";
const Schema = mongoose.Schema;

const courseSchema=new Schema({
   semester:{type:String,required:true},
   faculty:{type:String,required:true},
   department:{type:String,required:true},
   lineNumber:{type:String,required:true},
   symbol:{type:String,required:true},
   name:{type:String,required:true},
   creditHours:{type:String,required:true},
   sections:[]
   
});
const Course=mongoose.model("Course",courseSchema);
export default Course