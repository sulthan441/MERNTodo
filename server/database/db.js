import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('strictQuery', false);


// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_password =  process.env.DB_password;
const Connection = () => {


    const MONGODB_URI = `mongodb+srv://mohammedsulthan:sulthantechie@mern-todo-21-02.hhtgkke.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ');
    })
}

export default Connection;
