const express = require('express');
const app = express();
const PORT = 3000;

// Week 11 Day 2 Lab Review

//Greetings
app.get('/greetings/:name', (req, res) => {
  res.send(`Hello there, ${req.params.name}!!!`);
});

// Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
  const { total, tipPercentage } = req.params;
  const tip = (parseInt(total) * parseInt(tipPercentage)) / 100;
  const result = tip + parseInt(total);

  res.send(
    `<h1>The tip will be $${tip}. Resulting a total bill cost of $${result}</h1>`
  );
});

app.get('/magic/:question', (req, res) => {
  const answers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
  ];

  const random = answers[Math.floor(Math.random() * answers.length)];

  res.send(`<h3>${req.params.question}?</h3> <br/> <h1>${random}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});