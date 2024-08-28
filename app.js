
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use('/', require ('./route/index'));
app.use("/users", require("./route/users"));
app.listen(port, console.log(`Server is running on port ${port}`));