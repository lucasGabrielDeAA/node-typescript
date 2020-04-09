import express from "express";

import routes from "./routes";

// application's PORT.
const PORT = 3333;

// instantianting our app.
const app = express();

// configuring routes.
app.use(routes);

// setting the port to the application.
app.listen(PORT);
