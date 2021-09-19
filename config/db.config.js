function connectDB() {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/g6blog');
    mongoose.connection.once('connected', () => console.log('DB Connection Established Successfully.'))

}

module.exports = {connectDB}