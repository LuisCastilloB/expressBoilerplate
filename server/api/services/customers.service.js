import l from '../../common/logger';

const fs = require('fs');
const uuidv4 = require('uuid/v4');

let id = 0;

const customersJSON = fs.readFileSync('./customers.json', 'utf-8');
let customers = JSON.parse(customersJSON);
console.log(customers);


export class CustomersService {

  list() {
    l.info(`${this.constructor.name}.all()`);
    return Promise.resolve(customers);
  }

  add() {
    return true;
  }

  delete(id) {

    customers = customers.filter(customer => customer.id != id);
    // saving data
    const customersJSON = JSON.stringify(customers);
    fs.writeFileSync('/customers.json', customersJSON, 'utf-8');
    return true;
  }

  save(req) {
    const { name, lastname, city, address, phone } = req.body;

    if (!name || !lastname || !city || !address || !phone) {
      return false;
    }

    var newCustomer = {
      id: uuidv4(),
      name,
      lastname,
      city,
      address,
      phone
    };

    // add a new book to the array
    customers.push(newCustomer);

    // saving the array in a file
    const customersJSON = JSON.stringify(customers);
    fs.writeFileSync('/customers.json', customersJSON, 'utf-8');
    return true;
  }
}

export default new CustomersService();