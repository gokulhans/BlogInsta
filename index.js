const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const PORT = 5000;
var fs = require('fs');


dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log("Database Connected"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// server listening

app.listen(process.env.PORT || PORT, () => {
  console.log(`server is listening on ${PORT}`);
})

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// const Instagram = require('instagram-web-api');
// const client = new Instagram({ username: 'g_k__h', password: 'GOk@9846' })


const iwa = require('instagram-without-api-node');

const _cookie = 'mid=Yu09hQALAAEfWQOWV5aIgGfjOnTK; ig_did=75731793-3894-4891-A2EA-B46FFAA0D335; ig_nrcb=1; shbid="10563\05422376253183\0541691252012:01f7bcfc33874b908de1d932c8e260d676a4e211b85c29e03df52e2c7c5b31b25beb3c16"; shbts="1659716012\05422376253183\0541691252012:01f71a5dc5b63b6d5cbb07a7ffc1959bdc3d4a461e003ccad17cbd33b8b0c13aeadf3202"; datr=w0HtYj8MtDKpcY66qJe_M-IU; csrftoken=5M9cZ3pdXULZN06BS11CGMkURW7GMJpl; ds_user_id=22376253183; sessionid=22376253183%3AlthvAdU2JL15t3%3A0%3AAYfcVe9hE3PiTrsS-JPZKjzleuo0kmaQxTIramzGvQ; rur="NAO\05422376253183\0541691290400:01f78e8f6b38ebab3dcd02a08839ef5afe07f8fa8840d8ba86de0851316c8d1c58017250"'      // <!-- required!! please get your cookie from your browser console (6)
const _userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:103.0) Gecko/20100101 Firefox/103.0'      // <!-- required!! please get your user-agent from your browser console (7)
const _xIgAppId = '936619743392459'                 // <!-- required!! please get your x-ig-app-id from your browser console (8)


app.get("/api/insta", async (req, res) => {
 
// async function fetch() {
 

    // fs.unlink('instagram-cache.json', function (err) {
    //     if (err) {
    //         console.log('\n \n \n file deletion err \n \n \n ');   
    //         throw err;
    //     }
    //     // if no error, file has been deleted successfully
    //     console.log('File deleted!');
    // });


  const response = await iwa({

      headers: {
          'cookie': _cookie,
          'user-agent': _userAgent,
          'x-ig-app-id': _xIgAppId
      },

      base64images: true,                     // <!-- optional, but without it, you will be not able to store/show images
      maxImages: 12,                           // <!-- optional, 12 is the max number
      file: "instagram-cache.json",           // <!-- optional, instagram-cache.json is by default
      pretty: true,                           // <!-- optional, prettyfy json true/false
      time: 3600,                             // <!-- optional, reload contents after 3600 seconds by default
      id: "g_k__h"                     // <!-- id is required

  })

  let insta = response;
  res.json(insta);
// }
// fetch()

})
