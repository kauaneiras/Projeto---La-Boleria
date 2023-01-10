//import modules
import express from "express";
import cors from "cors";

//import routes


//APP
const app = express();

//app use modules
app.use(cors());

//app use routes
app.get("/", (req, res) => {
    res.send("Hello World!");
    }
);

// app listen 
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is running on port ' + port);
    }
);