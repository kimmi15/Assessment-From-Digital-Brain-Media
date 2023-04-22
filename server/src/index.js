const express = require("express");
const { default: mongoose } = require("mongoose");
const rout = require("../src/routers/index");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", rout);

// mongoose
//   .connect("mongodb://127.0.0.1:27017/todo")
//   .then((res) => console.log("db connected"))
//   .catch((err) => console.log(err));


mongoose
  .connect(
    "mongodb+srv://kimmi_kumari:kimmi@cluster0.mfdc6.mongodb.net/Assessment-From-Digital-Brain-Media?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));
app.listen(8989, () => {
  console.log("server is running on 8989");
});
