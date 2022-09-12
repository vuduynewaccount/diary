let mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diaryPost = new Schema({
  "title":{type:String,index:true},
  "diary_thumbnail":String,
  "min_read":Number,
  "data":String,
  "create_at":{type:Date,default:Date.now},
  "tags":[String],
  "views":{type:Number,default:0}
});

module.exports = mongoose.model("diary-post", diaryPost)
