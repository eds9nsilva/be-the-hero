const express = require('express');
const ongController = require('./controllers/ongController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();
 
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/profile', ProfileController.index);
routes.post('/session', SessionController.create);
module.exports = routes;