import mongoose from 'mongoose';

export const DbConnection = async(): Promise<void> => {
  return mongoose
    .connect(`${process.env.MONGO_URL}/chatbot`)
    .then(() => {
      console.log('DBD connected');
    })
    .catch((error) => {
      console.log('Error while DBef connection:', error);
    });
};
