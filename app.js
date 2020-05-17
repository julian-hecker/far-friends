// === Packages ===
const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require('cors'),
    passport = require("passport"),
    LocalStrategy = require("passport-local");

// App Config
const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if(req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', '*');
		return res.status(200).json({});
	}
	next();
})

app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.set("view engine", "html");
app.use(express.static(__dirname + "/build"));
app.set("views", __dirname + "/build");

// === Routes ===
app.use("/api/users", require("./api/userRoutes.js"));
app.get("*", (req, res) => {
    res.render("index.html");
});

// === Run Server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});
