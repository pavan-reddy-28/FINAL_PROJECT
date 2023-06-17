const { dbRegisterAddress } = require("../DAO/dbconnect");


async function registerAddress(customerData) {
  const data = await dbRegisterAddress(customerData)
  .then( (data) => data)
  .catch(data => null);
  return data;
}

module.exports = {
    registerAddress
}