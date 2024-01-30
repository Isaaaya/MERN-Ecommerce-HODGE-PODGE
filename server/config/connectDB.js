const mongoose = require('mongoose');

module.exports = connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to the DB');
    } catch (error) {
        process.exit(1)
    }
}