const express= require('express');
const morgan= require('morgan');
const exphbs= require('express-handlebars');
const path= require('path');

//inicio
const app = express();

//configuraciones
app.set('port',process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views' ));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')

}));
app.set('view engine','hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/usuarios',require('./routes/usuarios'));
app.use('/registro',require('./routes/registro'));
app.use('/diag',require('./routes/diag'));
app.use('/reparacion',require('./routes/reparacion'));
app.use('/estado',require('./routes/estado'));
app.use('/accesorios',require('./routes/accesorios'));
app.use('/facturacion',require('./routes/facturacion'));
app.use('/premium',require('./routes/premium'));
app.use('/basic',require('./routes/basic'));
app.use('/pro',require('./routes/pro'));

//public
app.use(express.static(path.join(__dirname,'public')));
//inicia servidor
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});