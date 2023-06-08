const { dbValidateAdmin } = require("../DAO/dbconnect");

async function validateAdmin(adminData) {
  const {mail,pass} = adminData
  console.log({...adminData})
  const data = await dbValidateAdmin(adminData)
  .then( (data) => data)
  .catch(data => null);
console.log(data)
  return data;
}

module.exports = {
  validateAdmin
}