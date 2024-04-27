const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.json({ message: "vocab-api is running now..." });
});
app.get('/api', async (req, res) => {
    res.json({ message: "testing flutter with nodeJS" });
});

const PORT = 3000;
app.listen(PORT)
