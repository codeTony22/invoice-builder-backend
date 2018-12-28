//Imports
const express = require('express');


//Start express app
const app = express();
const PORT = 3000;

//Routes
app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to Invoice builder backend'
    })
});

//Middlewares


app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
