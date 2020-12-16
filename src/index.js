const express= require('express');
const morgan= require('morgan');
const exphbs= require('express-handlebars');
const session = require('express-session')
const cookieParser =  require('cookie-parser');
const path= require('path');
const {privateKey}=require('./keys');

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
app.use('/static', express.static(__dirname + '/public'));

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cookieParser());
app.use(session({
    secret: privateKey,
    cookie: { maxAge: 600000 },
    resave: false,
    saveUninitialized: true,
}))
//variables globales
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/estudiante',require('./routes/basic'));
app.use('/admin',require('./routes/admin'));
app.use('/coordinador',require('./routes/coordinador'));
app.use('/solicitud',require('./routes/solicitud'));
app.all('*', (_, res) => res.redirect('/'));

//public
app.use(express.static(path.join(__dirname,'public')));
//inicia servidor
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});
