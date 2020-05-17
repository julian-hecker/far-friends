// === Packages ===
const express = require("express"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  LocalStrategy = require("passport-local");

let user = {};

// === Passport Config ===
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

// === App Config ===
const app = express();
app.use(require('cors'));
app.use(passport.initialize());

app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.set("view engine", "html");
app.use(express.static(__dirname + "/build"));
app.set("views", __dirname + "/build");
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "*");
//     return res.status(200).json({});
//   }
//   next();
// });

// === Routes ===
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/users", require("./routes/user.js"));
app.get("*", (req, res) => {
    res.render("index.html");
});


// === Run Server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
