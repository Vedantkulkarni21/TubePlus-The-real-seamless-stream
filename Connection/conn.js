const mongoose = require("mongoose");

// Backend
// mongodb://localhost:27017/youtubeBackend 
// mongodb://localhost:27017/
//will not work because MongoDB server might be configured to bind only to localhost for IPv4. so using 127.0.0.1
mongoose
  // .connect('mongodb://127.0.0.1:27017/youtubeBackend')
  .connect('mongodb://127.0.0.1:27017/youtubeBackend')
  .then(() => console.log('DB connection successful!')).catch(err=>{
    console.log(err)
  });