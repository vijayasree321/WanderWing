const mongoose=require("mongoose");
const initdata=require("./data");
const Listing=require("../Models/listing");
let MONGO_URL = "mongodb+srv://vijayasreemangali:vijayasree%402003@cluster0.e4vpwfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
 

connectdb()
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch((error) => {
    console.error("Error connecting to DataBase:", error);
  });
async function connectdb() {
  await mongoose.connect(MONGO_URL);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({...obj,owner:'68dbb21e4e5e1628f7751965'}));
    await Listing.insertMany(initdata.data);
    console.log("Data is intialized")
}
initDB();