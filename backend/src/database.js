const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/databasetest';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

const conection = mongoose.connection;

conection.once('open', () => {
    console.log('DDBB is connected');
});