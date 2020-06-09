const express = require ('express');
const app = express();

const { client } = require('./config/clientDefine.js');
client.connect();

const contactsRoutes = require('./routes/contactsRoutes');

const { log, error } = require('./middlewares/logging');

app.use(express.json());
app.use(log);  
app.use('/', contactsRoutes);
app.use(error); 

app.listen(3000, () => console.log('Listen on port 3000..'))