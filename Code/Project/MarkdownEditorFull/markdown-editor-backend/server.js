const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3001;

app.use(express.json());

// 处理根路径的 GET 请求
app.get('/', (req, res) => {
    res.send("Welcome to the Markdown Save Server!")
})

//保存 Markdown 文件的 API 端点
app.post("/save", (req, res) => {
    const { content } = req.body;
    const filePath = path.join(__dirname, "markdown.md");

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send("Save Error");
        } else {
            res.status(200).send("Save Success");
        }
    });
});

app.listen(PORT, (err) => {
    if (err) {
        console.error("Failed to start server: ", err);
    } else {
        console.log(`Server running on port: ${PORT}`);
    }
});