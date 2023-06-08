const express = require('express');
const cors = require('cors');
const dbconnect = require('./DAO/dbconnect');
const { validateAdmin } = require('./Controllers/Admin');
const app = express();
app.use(cors());
app.use(express.json());


app.get('/message', (req, res) => {
    
    res.json({ message: "Hello from server!" });
});

app.get('/admin', async(req, res) => {
    //const data = await dbconnect.validateAdmin({mail:"admin@gmail.com",password:"admin123"}).then(e=>console.log(e)).catch(console.dir);
    const data = await validateAdmin({mail:"admin@gmail.com",pass:"admin123"})
    res.json({ message: data });
});


app.get('/customer', async (req, res) => {
    const data = await dbconnect.validateCustomer({mail:"pavan@gmail.com",password:"pavan@123"}).then(e=> e).catch(console.dir);
    
    res.json({ message: data });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });