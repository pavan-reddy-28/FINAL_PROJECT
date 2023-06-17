const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const bodyParser = require('body-parser');

const dbconnect = require('./DAO/dbconnect');
const { validateAdmin, registerAdmin } = require('./Controllers/Admin');
const { registerCustomer, validateCustomer } = require('./Controllers/Customer');
const { registerAddress } = require('./Controllers/Address');
const { addProduct, ImageUpload } = require('./Controllers/Products');


const app = express();
const upload = multer();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// app.use(upload.array());





app.get('/message', (req, res) => {

    res.json({ message: "Hello from server!" });
});

app.get('/admin', async (req, res) => {
    const data = await validateAdmin({ mail: "admin@gmail.com", pass: "admin123" })
    res.json({ message: data });
});


app.get('/customer', async (req, res) => {
    const data = await validateCustomer({ mail: "pavan@gmail.com", password: "pavan@123" }).then(e => e).catch(console.dir);
    res.json({ message: data });
});

app.post('/registerCustomer', async (req, res) => {
    //extract body data 
    const { 
        first_name, 
        last_name, 
        mail, 
        pass, 
        phone, 
        address 
    } = req.body.data;

    let addressId = null;
    
    if ((address)) {
        //extract address data
        const { 
            address_one, 
            city, 
            country, 
            pin, 
            state } = address;
        //register address
        const dataAddress = await registerAddress({ 
            address_one: address_one, 
            city: city, 
            country: country, 
            pin: pin, 
            state: state 
        }).then(e => e).catch(console.dir);
        addressId = dataAddress.insertedId;
    }

    const dataCustomer = await registerCustomer({ 
        first_name: first_name, 
        last_name: last_name, 
        pass: pass, 
        phone: phone, 
        address: addressId, 
        mail: mail 
    }).then(e => e).catch(console.dir);
    res.json({ message: dataCustomer });
});

app.post('/registerAddress', async (req, res) => {
    const { address_one, city, country, pin, state } = req.body;
    console.log(req.body);
    const data = await registerAddress({ 
        address_one: address_one, 
        city: city, 
        country: country, 
        pin: pin, 
        state: state 
    }).then(e => e).catch(console.dir);
    res.json({ message: data });
});

app.post('/addProduct', ImageUpload.single('product-image'),async (req, res) => {
    const { description, price, quantity, timestamp, title,company } = req.body;

  const fileId = req.file.id;
  console.log("field Id : ",fileId);
  const product = {
    description,
    price,
    quantity,
    timestamp,
    title,
    company,
    img: fileId
  };

console.log(product)
   
    const data = await addProduct({ 
        description,
        price,
        quantity,
        timestamp,
        title,
        company,
        img: fileId
    }).then(e => e).catch(console.dir);
    addProduct
    res.json({ message: data});
});


app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});