const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {connection} = require('./database');

//config
const app = express();
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: '*'}));

//routes
app.get("/test/message", (req, res) =>{
    res.json({message: "Bienvenido al testing"});
});
app.use('/test/users', require('./routes/users.routes'));

//server response PORT
app.listen(app.get('port'), () =>{
    console.log('Server en el puerto: ', app.get('port'))
});