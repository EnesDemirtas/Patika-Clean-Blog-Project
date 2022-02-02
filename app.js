const express = require("express")
const mongoose = require("mongoose")
const ejs = require("ejs")
const Post = require("./models/Post")

const app = express()

// Create DB Connection
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Template Engine
app.set("view engine", "ejs")

// Middleware
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.get("/", async (req, res) => {
    const add_post = await Post.find({})
    res.render("index", {
        add_post
    })
})


app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/add_post", (req, res) => {
    res.render("add_post")
})

app.get("/post", (req, res) => {
    res.render("post")
})

app.post("/add_post", async (req, res) => {
    await Post.create(req.body)
    res.redirect("/")
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is started at port ${port}...`)
})
