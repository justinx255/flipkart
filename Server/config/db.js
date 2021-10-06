import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerceweb.qis5q.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('====================================');
        console.log('DataBase Connected Succesfully');
        console.log('====================================');
    } catch (error) {
        console.log('Error:', error.message)
    }
}
export default Connection;