const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//const mongoose = require("mongoose");
//const session = require('express-session');
const passport = require("passport");
//const passportLocalMongoose = require("passport-local-mongoose");
//const findOrCreate = require('mongoose-findorcreate');
const methodOverride = require('method-override');
//git commit -m "Deploy"const Schema = mongoose.Schema;
const app = express();


// <----------------------------------------------------------->


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(session({
//   secret: "Secret Key",
//   resave: false,
//   saveUninitialized: false
// }));

//app.use(passport.initialize());
//app.use(passport.session());
// mongoose.connect("mongodb://localhost/havefun", {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.set("useCreateIndex", true);
// mongoose.set('useFindAndModify', false);

// <----------------------------------------------------------->


// SCHEMAS
// const userSchema = new Schema({
//   username: String,
//   password: String,
//   name: String,
// });
// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

// const eventSchema = new Schema({
//   eventName: String, 
//   eventDescription: String,
//   eventDate: String,
//   eventMonth: String,
//   url: String
// });


// <----------------------------------------------------------->


//MODELS
// const User = new mongoose.model("User", userSchema);
// const Event = new mongoose.model("Event", eventSchema);

// <----------------------------------------------------------->


// passport.use('local.one', User.createStrategy());

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });


// <----------------------------------------------------------->




// LANDING
app.get("/", (req, res) => {
  Event.find({}, (err, events) => {
    if(!err) {
      res.render("portfolio.ejs",{events:events});
    }
  });
  })
    
 

// //ADMIN
// app.get("/admin", (req, res) => {
//   res.render("landing");
// });



// //ADMIN  HOME
// app.get("/admin-home", async (req, res) => {
//   if (req.isAuthenticated())
//   {
//     Event.find({}, (err, events) => {
//       if(err)
//       {
//         console.log(err);
//       }
//       else{
//         res.render("admin-home", {events: events});
//       }
//     });
//   }
//   else
//   {
//     res.redirect("/admin");
//   }
// });

// app.post("/admin-home", (req, res) => {
//   const newEvent = new Event({
//     eventName: req.body.eventName,
//     eventDescription: req.body.eventDescription,
//     url: req.body.eventLink
//   });
//   newEvent.save();
//   res.redirect("/admin-home");
// });

// app.put("/admin-home/:eventID", (req,res) => {
//   Event.findByIdAndUpdate(req.params.eventID, {eventName: req.body.eventName,eventDate:req.body.eventDate,eventMonth:req.body.eventMonth, eventDescription: req.body.eventDescription, url: req.body.eventLink} ,(err, foundEvent) => {
//     if(!err){
//       res.redirect("/admin-home");
//     }
//     else{
//       console.log(err);
//     }
//   });
// });

// app.delete("/admin-home/:eventID", (req, res) => {
//   Event.findByIdAndDelete(req.params.eventID, (err, foundEvent) => {
//     if(!err){
//       res.redirect("/admin-home");
//     }
//     else{
//       console.log(err);
//     }
//   });
// });

// //UPDATE EVENT
// app.get("/admin-home/update-event/:eventID", (req, res) => {
//   Event.findById(req.params.eventID,(err, foundEvent) => {
//     if(!err){
//       res.render("updateEvent.ejs", {event: foundEvent});
//     }
//   })
// });


// // LOGIN
// app.post("/login", (req, res) => {
//   const user = new User({
//     username: req.body.username,
//     password: req.body.password
//   });

//   req.login(user, function(err){
//     if (err) {
//       console.log(err);
//     } else {
//       passport.authenticate("local.one")(req, res, function(){
//         res.redirect("/admin-home");
//       });
//     }
//   });
// });


// // LOGOUT
// app.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/");
// });




// // SIGN UP
// app.get("/admin/signup", (req, res) => {
//   res.render("signup");
// });

// app.post("/signup", (req, res) => {
//   User.register({username: req.body.username, name: req.body.name}, req.body.password, function(err, user) {
//     if(err){
//       console.log(err);
//       res.redirect("/signup")
//     }
//     else{
//       passport.authenticate("local.one")(req, res, function(){
//         res.redirect("/admin-home");
//       });
//     }
//   });
// });

// <----------------------------------------------------------------------->


app.listen(process.env.PORT || 3001, function() {
  console.log("Client Portfolio\nServer started on port 3001");
});
