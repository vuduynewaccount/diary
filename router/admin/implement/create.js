let diary_post = require("../../../model/diary-post");

let create = function(req, res) {
  new diary_post({
    "title":req.body.title,
    "diary_thumbnail": req.body.diary_thumbnail,
    "min_read": req.body.min_read,
    "data": req.body.data,
    "tags": req.body.tags,
  }).save((err)=>{
    if(err){
      res.send({message:err});
    }else{
      res.json({message:"create post successly"});
    }
  })
  
}

module.exports = create