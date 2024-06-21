
import mongoose from 'mongoose';

mongoose
    .connect('mongodb://localhost:27017/native')
    .then(() => {
        console.log('DB connected successfuly!');
    })
    .catch(err => {
        console.error(err);
      
});