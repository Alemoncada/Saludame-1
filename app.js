const { urlencoded } = require('express');
const express = require('express');
const app = express();

function capitalize(nombre){
    return nombre.charAt(0).toUpperCase() + nombre.slice(1)
};
 app.use(express.urlencoded({extended : true}));


app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'];

res.send(userAgent)
// res.send('<form action="/" method="post">'+
// '<input type="text" name="name">'+
// '<button type="submit"> enviar </button>'+
// '</form>');
// });
// app.post('/', (req, res) => {
// const {name} = req.body;
// res.send("<h1>Hola " + capitalize(name) + "!</h1>");
    });

app.listen(3000, () => console.log('Listening on port 3000!'))