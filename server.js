const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:34899@testdb.torduzw.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Parse request body
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    const newUser = new User({
        name,
        email
    });

    newUser.save()
    .then(() => res.send('Data submitted successfully!'))
    .catch(err => console.error('Error saving data:', err));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});