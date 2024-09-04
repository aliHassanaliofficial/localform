const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:34899@testdb.torduzw.mongodb.net/';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


    const User = mongoose.model('User', {
        name: String,
        email: String
    });
    
    const newUser = new User({
        name: 'John Doe',
        email: 'johndoe@example.com'
    });
    
    newUser.save()
    .then(user => console.log('User saved successfully:', user))
    .catch(err => console.error('Error saving user:', err));
    