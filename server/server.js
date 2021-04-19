const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require('../exampleresponse.json')

app.listen(port, () => console.log(`Listening on port ${port}`));

// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videos = data;

// GET "/"
app.get("/", (req, res) => {
res.send(videos);
});

app.use (express.json ()); 
app.use (urlencoded ({extended: true}));

// POST "/"
app.post('/',(req,res)=>{
  let  genId ;
  const {title,url}=req.body


const generateId=()=>{
  return Math.floor(100000 + Math.random() * 900000);
}

  if(!title || !url){
  res.send('error')
  }
else{
 
  while (videos.find(video=>{video.id==generateId()})){
 genId = generateId();

}
const rating=0;

let newVid={"id":genId,"title":title,"url":url,"rating":rating}

console.log(newVid);
videos.push(newVid);
res.send('added succesfully')
}

})