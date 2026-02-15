const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@sauble.zlmgh7i.mongodb.net/?appName=Sauble`,
    );
    console.log("Conexão bem sucedida!");
  } catch (error) {
    console.log("Erro: ", error);
  }
};
module.exports = connectToDataBase;
