const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const ejs = require("ejs")
const postController = require("./controllers/postController")
const pageController = require("./controllers/pageController")

const app = express()

// Create DB Connection
mongoose.connect("mongodb+srv://enesd:5CO6q2ikiMfu4YOa@cluster0.pnast.mongodb.net/pcat-db?retryWrites=true&w=majority")

// Template Engine
app.set("view engine", "ejs")

// Middleware
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
    methodOverride("_method", {
        methods: ["POST", "GET"],
    })
)

// Routes
app.get("/", postController.getAllPosts)
app.get("/posts/:id", postController.getPost)
app.post("/add_post", postController.createPost)
app.put("/posts/:id", postController.updatePost)
app.delete("/posts/:id", postController.deletePost)

app.get("/posts/edit/:id", pageController.getEditPage)
app.get("/about", pageController.getAboutPage)
app.get("/add_post", pageController.getAddPage)

const port = 3000
app.listen(port, () => {
    console.log(`Server is started at port ${port}...`)
})
