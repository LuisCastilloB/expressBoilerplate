import examplesRouter from './api/controllers/examples/router'
import customersRouter from './api/controllers/customers/router'
export default function routes(app) {
  
  app.use('/api/v1/examples',examplesRouter);
  app.use('/api/v2/customers', customersRouter);
};