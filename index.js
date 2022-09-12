let express = require("express");
let app = new express();

var cors = require('cors')
app.use(cors())
//connect to db
require('dotenv').config({ path: 'app.env' })
let mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI)


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router
const adminRouter = require('./router/admin/index.js');
const clientRouter = require('./router/client/index.js');

app.use('/api-admin/', adminRouter);
app.use('/api-client/', clientRouter);


app.listen(8080 || process.env.PORT, () => {
  console.log("running")
}) 