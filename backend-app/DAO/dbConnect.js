const { DATABASE, ADMIN, CUSTOMER } = require('../util/databaseConstants');

const MongoClient = require('mongodb').MongoClient;


const uri = "mongodb+srv://sxp17390:root123@cluster0.6bf1a1k.mongodb.net/mongodb?retryWrites=true&w=majority";

const client = new MongoClient(uri);


// data : {mail ,password}  of admin and will  check the database and returns data
async function dbValidateAdmin(adminData) {
    // const {mail,password} = adminData
    
  try {
    const database = client.db(DATABASE);
    const admin = database.collection(ADMIN);
    const query = { ...adminData };
    const data = await admin.findOne(query);
    return data;
  } catch( error) {
    
  }
}


// data : {mail ,password}  of customer and will  check the database and returns data
async function dbValidateCustomer(data) {
    const {mail,password} = data
  try {
    const database = client.db(DATABASE);
    const admin = database.collection(CUSTOMER);
    const query = { mail: mail,pass:password };
    const data = await admin.findOne(query);
    return data;
  } catch( error) {
   
  }
}





module.exports = {
    dbValidateAdmin,dbValidateCustomer
}

