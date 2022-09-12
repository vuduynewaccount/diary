let diary_post = require("../../../model/diary-post");
let resModel=require("../../../response/index.js");

let list = function(req, res) {
  let page=parseInt(req.params.id)-1;
  
  diary_post.find({},{}, { skip: 10*page, limit: 10 },(err,docs)=>{
    if(!docs){
      resModel.message="can't find this post";
      resModel.data=docs;
    }else{
     resModel.message="find post successly";
     resModel.data=docs;
    }
     res.json(resModel)
  });
}

module.exports = list
