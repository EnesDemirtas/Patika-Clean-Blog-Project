const express = require("express")

const app = express()

app.get("/", (req, res) => {

    const blog = {
        id: 1,
        name: "Blog Title",
        description: "Blog Description"
    }

    res.send(blog)
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is started at port ${port}...`)
})