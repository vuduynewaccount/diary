const express = require('express');
const router = express.Router();
let routerHandler = require("./routerHandler");
// define the home page route
router.get('/view/:id', routerHandler.viewPost)
router.get('/list/page/:id', routerHandler.list)

module.exports = router