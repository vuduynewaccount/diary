const express = require('express');
const router = express.Router();
let routerHandler = require("./routerHandler");
// define the home page route

router.get('/health', routerHandler.health);
router.post('/create', routerHandler.create);
router.post('/delete/:id', routerHandler.deletePost);
router.get('/view/:id', routerHandler.viewPost)
router.get('/list/page/:id', routerHandler.list)

module.exports = router