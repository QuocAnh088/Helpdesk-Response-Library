const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Force Google Public DNS
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Helpdesk = require('./api/models/helpdeskModel');
const routes = require('./api/routes/helpdeskRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://GCS220011:GCS220011@fgwweb2.oejgacd.mongodb.net/helpdeskDB'
);
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);
app.use('/', (req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server is running on port ${port}`);//