let diary_post = require("../../../model/diary-post");
let resModel=require("../../../response/index.js");

let deletePost = function(req, res) {
  console.log("deleting")
  diary_post.findOneAndDelete({_id:req.params.id},(err,doc)=>{
    if(err){
      resModel.message=err;
      resModel.data=doc;
    }else{
     resModel.message="deleting post successly";
     resModel.data=doc;
    }
     res.json(resModel)
  });
}

module.exports = deletePost