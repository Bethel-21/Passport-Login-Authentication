

const express = require("express");
const router = express.Router();
router.get("/", (req, res) => res.send("Welcome to this page!"));
router.get("/login", (req, res) => res.send("Login!"));
router.get("/register", (req, res) => res.send("Register!"));
module.exports = router;