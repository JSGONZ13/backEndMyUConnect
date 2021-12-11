//https://www.youtube.com/watch?v=423ChmDeFso

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./config');

mongoose.connect("mongodb+srv://admin:admin@cluster0.bizdt.mongodb.net/myUConnect?retryWrites=true&w=majority");

app.use(morgan('dev'));
app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
app.use(cors());
app.set('json spaces', 2);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./src/routes/user_route'));
app.use(require('./src/routes/post_route'));
app.use(require('./src/routes/response_routes'));

app.listen(
    app.get('port'), () => {
        console.log('port running on ' + app.get('port'));
    }
)