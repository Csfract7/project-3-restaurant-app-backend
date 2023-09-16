require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();
const cors = require("cors")
const routes = require('./routes/index')

app.use(cors('*')); // to prevent cors errors, open access to all origins
app.use(express.urlencoded({extended: true}))
app.use(express.json()); // parse json bodies

///////////////////////////////
// ROUTES
////////////////////////////////

// app.get("/", (req, res) => {
//   res.send("sanity check");
// });

app.use('/', routes)

app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
