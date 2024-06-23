const { error } = require('console');
const express = require('express')
const app = express()
const path = require(`path`);

//setting view engine to ejs
app.set("view engine", "ejs");

// hbs,pug,jade yeh sab html me convert hote hai jisme logic likh skte hai ..

// ejs hamesha views folder  ko doon tha hai..
// uske jo page rennder krna ho ejs extension se banao or render krdo  or render me sirf ek hi cheez ati hai jo hai views folder ke andar koisa bhi page  jo server pe render hojayega .

// backend me front ki js , images , stylesheets sab static files me ati hai , 

app.use(express.static(path.join(__dirname, "public")));
// console.log(__dirname)
// __dirname : current folder ka address deta hai, 


app.get('/', function (req, res) {
  // res.send('hello dosto kaise ho aap sab');
res.render("index");
})



app.get('/contacts', function (req, res) {
    // res.send('crated a contacts page through route. ');
    res.render("contact")
  })

  
  app.get('/services', function (req, res) {
    // res.send('created a  services page through route');
    res.render("service")
  })


    app.get('/cta', function (req, res) {
    // res.send('created a call to action page through route');
    res.render("cta");

  })


app.get(`/error`, function(req, res,next){
    throw Error("eror arha hai frands")
})

// jab bhi error bhejna hai throw Error function me error daldo or 
// app.use method last me likho usme ek errorHandler function chlat hai usme error ko render krvado page pe error bhejdo..


app.use(function errorHandler(err, req, res, next){
   if(res.headersSent){
    return next(err);
   }
   res.status(500);
   res.render("error", {error: err})
})




app.listen(3200);


// route ka mtlb jab url mein / contacts , / services  etc chnage hota hai url or differnt pages load hote hai use routing kehte hai sahab...


// get zyada use hoti hai , but  post zyada secure hoti hai jab page andar ka data url me private krna ho, dono use hoti hai routes banane ke liye.



// ctrl c se server band hojata hai
// ctrl c phir node file name ke sath restart hojate hai phir reload krke changes dikhayi denge easily..

