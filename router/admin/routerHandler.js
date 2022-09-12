let health = require("./implement/health.js");
let create = require("./implement/create.js");
let deletePost = require("./implement/delete.js");
let viewPost=require("./implement/viewPost.js");
let list=require("./implement/list.js");

let routerHandle = {
  health,
  create,
  deletePost,
  viewPost,
  list
}

module.exports = routerHandle;