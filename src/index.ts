import express from "express";
import cors from "cors";

import routes from "./routes";

// application's PORT.
const PORT = 3333;

// instantianting our app.
const app = express();

// adding cors
app.use(cors());

// configuring routes.
app.use(routes);

// setting the port to the application.
app.listen(PORT);
