import CustomerService from '../../services/customers.service';
export class Controller {

  all(req, res) {
    CustomerService
    .list()
    .then(r => res.json(r));
  }

  list(req, res) {
    CustomerService
    .list()
    .then(customers => res.render('index', {customers}));
  }

  add(req, res) {
    CustomerService
    .add()
    .then(res.render('new'));
  }

  save(req, res) {
    CustomerService
      .save(req)
      .then(res.redirect('/api/v2/customers/list'))
  }

  delete(req, res) {
    CustomerService
      .delete(req.params.id)
      .then(res.redirect('/api/v2/customers/list'))
  }
}
export default new Controller();