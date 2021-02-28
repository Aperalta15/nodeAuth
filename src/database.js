import mongoose, { mongo } from 'mongoose';

mongoose.connect("mongodb://localhost/learningNode", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db=>console.log("Db is connected"))
    .catch(error => console.log(console.error()))