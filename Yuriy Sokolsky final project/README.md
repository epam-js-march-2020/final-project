# Final project by Yuriy Sokolsky
Working version available on heroku:
### https://yuriy-sokolsky-haircut.herokuapp.com/

### Installation

Install the dependencies, build bundle  and start the server.

```sh
$ npm install       //to install modules
$ npm run build     //to build via webpack
$ npm start        //to start server
```

### Server will start on localhost:80

### Used dependencies:
- mongodb  (database)
- express   (server)
- React(react-dom,react-phone-input-2,react-datepicker etc.) (client)
- react-router  (client)
- react-bootstrap   (client)
- webpack   (client)
- date-fns  (client)
- cookie-parser (server)
- fontawesome   (client)

and a few others

### REST API 

GET `/api/services` - get serivces collection

GET `/api/services/:id` -get service by id

GET `/api/masters` -  get masters collection

GET `/api/masters/:id` - get master by id

PUT `/api/appointments`  - put new appointment

GET `/api/appointments/search-by-mater-date`  - get apointments by master and date

GET `/api/appointments/search-by-user` - get appointments by user 

DELETE `/api/appointment/delete/:id` - delete appointment by id

POST `/api/registration` - user regestration

POST `/api/login` - user login

POST `/api/logout` - user logout

PUT `/api/update-profile` - update user profile

POST `/api/runtime`- user runtime



# TODO

- masters list on about us page
- true resposive version
- true user sessions with runtime
- #### Normal deisgn =)
- and more more more...
