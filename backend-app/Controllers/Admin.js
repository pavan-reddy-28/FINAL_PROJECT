const { dbValidateAdmin,dbRegisterAdmin } = require("../DAO/dbconnect");

async function validateAdmin(adminData) {
  const {mail,pass} = adminData
  console.log({...adminData})
  const data = await dbValidateAdmin(adminData)
  .then( (data) => data)
  .catch(data => null);
console.log(data)
  return data;
}



async function registerAdmin(adminData) {
  const { name, pass, mail } = adminData
  console.log("register admin page : ",{...adminData})
  const data = await dbRegisterAdmin(adminData)
  .then( (data) => data)
  .catch(data => null);
  return data;
}

module.exports = {
  validateAdmin,
  registerAdmin
}