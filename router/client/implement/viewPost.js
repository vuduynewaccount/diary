let diary_post = require("../../../model/diary-post");
let resModel=require("../../../response/index.js");

let viewPost = function(req, res) {
  diary_post.findOne({_id:req.params.id},(err,doc)=>{
    if(!doc){
      resModel.message="can't find this post";
      resModel.data=doc;
    }else{
     resModel.message="find post successly";
     resModel.data=doc;
    }
     res.json(resModel)
  });
}

module.exports = viewPost