//Imports
const express = require('express');


//Start express app
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
