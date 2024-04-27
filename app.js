const express = require('express');
const app = express();

app.use(express.json());
const questions = [
    {
      "question": "What does the word 'ephemeral' mean?",
      "options": [
        "Short-lived",
        "Eternal",
        "Tangible",
        "Opaque"
      ],
      "answer": "Short-lived"
    },
    {
      "question": "Which word means 'the ability to read and write'?",
      "options": [
        "Illiterate",
        "Literate",
        "Numerate",
        "Innumerate"
      ],
      "answer": "Literate"
    },
    {
      "question": "What is the synonym of 'ubiquitous'?",
      "options": [
        "Scarce",
        "Rare",
        "Everywhere",
        "Singular"
      ],
      "answer": "Everywhere"
    },
    {
      "question": "What does 'gregarious' mean?",
      "options": [
        "Friendly and outgoing",
        "Shy and reserved",
        "Intelligent and wise",
        "Careless and thoughtless"
      ],
      "answer": "Friendly and outgoing"
    },
    {
      "question": "Which word means 'to make less severe or harsh'?",
      "options": [
        "Intensify",
        "Aggravate",
        "Mitigate",
        "Exacerbate"
      ],
      "answer": "Mitigate"
    },
    {
      "question": "What does 'ephemeral' mean?",
      "options": [
        "Lasting a very short time",
        "Lasting a very long time",
        "Permanent",
        "Stable"
      ],
      "answer": "Lasting a very short time"
    },
    {
      "question": "What is the synonym of 'ubiquitous'?",
      "options": [
        "Rare",
        "Scarce",
        "Everywhere",
        "Limited"
      ],
      "answer": "Everywhere"
    },
    {
      "question": "What does 'gregarious' mean?",
      "options": [
        "Sociable",
        "Shy",
        "Introverted",
        "Confident"
      ],
      "answer": "Sociable"
    },
    {
      "question": "Which word means 'expressing or characterized by vehement opinions'?",
      "options": [
        "Passionate",
        "Indifferent",
        "Neutral",
        "Calm"
      ],
      "answer": "Passionate"
    },
    {
      "question": "What is the antonym of 'ephemeral'?",
      "options": [
        "Temporary",
        "Short-lived",
        "Brief",
        "Transient"
      ],
      "answer": "Permanent"
    }
]
app.get('/', async (req, res) => {
    res.json({ message: "vocab-api is running now..." });
});
app.get('/api', async (req, res) => {
    // Shuffle the questions array to get a random order
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    // Select the first 5 questions
    const selectedQuestions = shuffledQuestions.slice(0, 5);
    res.json(selectedQuestions);
});

const PORT = 3000;
app.listen(PORT)
