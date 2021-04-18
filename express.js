const path = require("path")
const express = require("express")
var app = express();
const templatePath = path.join(__dirname, "/public")

const staticpath = path.join(__dirname, "/public/")
app.set('view engine', "ejs")
app.set("views", templatePath)

app.get("/", (req, res) => {
    para = {
        id: 118,
        name: 'soumya'
    }
    res.render('home', para)
});
app.get('*', (req, res) => {
    res.send("404")
})
app.listen(8090, () => {
    console.log("listening")
})