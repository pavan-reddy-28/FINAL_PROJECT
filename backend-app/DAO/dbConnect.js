const { DATABASE, ADMIN, CUSTOMER, ADDRESS, PRODUCTS } = require('../util/databaseConstants');

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
  } catch (error) {

  }
}

// data : {mail ,password}  of admin and will  check the database and returns data
async function dbRegisterAdmin(adminData) {
  // const {mail,password} = adminData

  try {
    const database = client.db(DATABASE);
    const admin = database.collection(ADMIN);
    const query = { ...adminData };
    const data = await admin.insertOne(query);
    return data;
  } catch (error) {
    return "error"
  }
}




// CUSTOMER API 


// data : {mail ,pass,}  of customer and will  register in the database and returns data
async function dbRegisterCustomer(customerData) {
  const { first_name, last_name, mail, pass, phone, address } = customerData
  console.log("Data ", { first_name, last_name, mail, pass, phone, address })

  try {
    const database = client.db(DATABASE);
    const customer = database.collection(CUSTOMER);
    const query = { first_name, last_name, mail, pass, phone, address };
    const data = await customer.insertOne(query);
    return data;
  } catch (error) {
    return "error"
  }
}

async function dbRegisterAddress(address) {
  const {
    address_one,
    city,
    country,
    pin,
    state } = address
  try {
    const database = client.db(DATABASE);
    const address = database.collection(ADDRESS);
    const query = { address_one, city, country, pin, state };
    const data = await address.insertOne(query);
    return data;
  } catch (error) {
    return "error"
  }
}

// data : {mail ,password}  of customer and will  check the database and returns data
async function dbValidateCustomer(data) {
  const { mail, password } = data
  try {
    const database = client.db(DATABASE);
    const customer = database.collection(CUSTOMER);
    const query = { mail: mail, pass: password };
    const data = await customer.findOne(query);
    return data;
  } catch (error) {
    return "error"
  }
}

// data : { description,img,price,quantity,timestamp,title,company } inserts product data into the database 
async function dbAddProduct(data) {
  const { description,img,price,quantity,timestamp,title,company } = data
  try {
    const database = client.db(DATABASE);
    const product = database.collection(PRODUCTS);
    const query = { description:description,img:img,price:price,quantity:quantity,timestamp:timestamp,title:title,company:company };
    const data = await product.insertOne(query);
    return data;
  } catch (error) {
    return "error"
  }
}



module.exports = {
  dbValidateAdmin, 
  dbValidateCustomer,
   dbRegisterAdmin, 
   dbRegisterCustomer,
    dbRegisterAddress,
    dbAddProduct,
}

