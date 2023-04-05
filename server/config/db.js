const mongoose=require("mongoose");

const connection=()=>{
    mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,

    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
}

module.exports=connection;
