import * as express from 'express';
import controller from './controller'
export default express.Router()
    .get('/', controller.all)
    .get('/list/', controller.list)
    .get('/new/', controller.add)
    .post('/new/', controller.save)
    .get('/delete/:id', controller.delete)
    
    
    