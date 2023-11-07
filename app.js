const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require('multer');

const keys = require("./config/keys");
// const passport = require('passport');
// const morgan = require('morgan')
// const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');
// const http = require('http');
// const socketIO = require('socket.io');//
// const { PDFDocument } = require('pdf-lib');

///
// const Note = require("./models/Notification");
// const Notification = require('./routes/api/Notification');

const cors = require("cors");
// const fs = require('fs');

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://sillva230456:Fj5j3l7kBIhas3V6@cluster0.lkz8cgp.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);
// db = connect('guide', host='mongodb+srv://sillva230456:Fj5j3l7kBIhas3V6@cluster0.lkz8cgp.mongodb.net/?retryWrites=true&w=majority')
// print(db)
// ma = Marshmallow(app)
// client = MongoClient('mongodb+srv://sillva230456:Fj5j3l7kBIhas3V6@cluster0.lkz8cgp.mongodb.net/?retryWrites=true&w=majority')
// db1 = client['guide']

// const storage = multer.diskStorage({
//   destination: 'uploads/',
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({storage});

// app.use('/api/upload', upload.array('files'), (req, res)=>{

// })

app.use('/api/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads', filename); 

  res.download(filePath, (err) => {
    if (err) {
      res.status(500).send('Error downloading file');
    }
  });
});


app.use(bodyParser.json());

app.use("/api/cars/", require("./routes/carsRoute"));
// app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));

app.use("/api/users/", require("./api/routes/users"));
// app.use("/api/profile/", require("./routes/profile"));
// app.use("/api/posts/", require("./routes/posts"));
// app.use("/api/notifications/", require("./routes/Notification"));
// app.use(express.static("public"))

app.use(express.static(path.join(__dirname, "client", "build")));


app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
module.exports = app;
