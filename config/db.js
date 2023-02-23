const mongoose = require('mongoose')

const connectDB = () => {
    mongoose
    .connect(process.env.mongoURL)
    .then((connect) => console.log("db connected"))
    .catch((err) => console.log(err));

}
module.exports = connectDB