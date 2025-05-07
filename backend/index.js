const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://mongo:27017/comments', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const commentModel = new mongoose.Schema({
    author: String,
    text: String,
    date: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentModel);

app.get('/api/comments', async (req, res) => {
    const comments = await Comment.find().sort({date: -1});
    res.json(comments);
});

app.post('/api/comments', async (req, res) => {
    const { author, text, date } = req.body;
    if (!author || !text) {
        return res.status(400).json({error: 'Author and text of comment are required fields!'});
    }
    const comment = new Comment({ author, text});
    await comment.save();
    res.status(201).json(comment);
})

// const PORT = process.env.PORT || 5000;
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend server started on port ${PORT}`);
});