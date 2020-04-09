# node-typescript

This project contains a little demonstration of **How to Typescript your Node app**.

If you just want to clone this repository, and run the application, follow this steps.

```
  git clone https://github.com/lucasGabrielDeAA/node-typescript && cd node-typescript
  yarn install
  yarn dev
```

Or, if you want to create your own app, you can do this using a simple node app, creating a folder and running some commands, like the following example. 

```
  mkdir <yourAppName> && cd <yourAppName>
  yarn init -y
```

To learn how to create a nice node-api with some nice features, take a look at this [node-api](https://github.com/lucasGabrielDeAA/node-api).

## Typescript

Adding typescript to your app, is really quite simple. just install it as a **devDepencency** running this command

```
  yarn add -D typescript
```

Now you can create your **.js** application's file as **.ts** files. And make some nice improvents in your code. Like the following example. But let's install some dependencies to make the code's understanding simple.

```
  yarn add express
```

Then create a index.ts file under your src directory. And in this file we are going to start to type some code.

## import/export

As you already know, in node's applications we use the **require** sintax to import libs and applications's dependencies. when you use **typescript** in your app, you can change the way you import in your **.ts** files.

```javascript
  // node standard import
  const express = require('express');

  // node with typescript, import way
  import express from 'express';
```

But what is the difference, is just syntax. Yeah, is just syntax, but when you're a React/react-native software developer as I am. You are already familiarized with the **import/export** syntax, this will make your learning curve even smaller. Let's continue creating our **index.ts** file.

```javascript
  import express from 'express';

  // application's PORT
  const PORT = 3333;

  // instantianting our app.
  const app = express();

  // creating a route
  app.get('/', (req, res) => {
    return res.send('Hello');
  });

  // setting the port to the application.
  app.listen(PORT);

```

If you use some IDE features to enchance your code, probably you already know the **Ctrl+space** (Linux/Windows) **Cmd+space** (Mac) to auto complete your code. And when you was writing the following line, you probably noted that the IDE didn't understand or found the methods and the functionalities of our app const.

```javascript
  // creating a route
  app.get('/', (req, res) => {
    return res.send('Hello');
  });
```

This happens because we are using the typescript, and by default, our **express**'s module does not export the type of itself, and the typescript does not recongnize. And to solve this problem you just need to install the types for express, found in this dependency.

```
  yarn add -D @types/express
```

Now, you can find the inner types and modules of express, in your **ts** file.

## Running the application

Now we need to run our node application, normally we would do this by running `node src/index.js`. But, we don't have a index.js file, and if we run `node src/index.ts` we'll find some problems, because node does nos understand the syntax on our **ts** file.

```
  SyntaxError: Cannot use import statement outside a module
```

To solve this kind of issue, we have to **transpile** our **ts** file to a **js** file, so, node can undertand this file. Let's do this. If you take a look at your **node_modules** folder, and open the bin's directory, you can find all the scripts you can run in your application. One of them is called **tsc**. This is the typescript command. We'll use this to transpile our **ts** files. Let's do this.

```
  yarn tsc src/index.ts
```

After run this command, the tyoescript will generate a **index.js** file for you, with the content of your transpiled **index.ts** file content. But, will show us some error, with a message about the **esModuleInterop** because we are doing a **default** import from the `express`, to prevent this, go to your **index.ts** file and change the followinf line.

```javascript
  import * as express from 'express';
```

Then you run the **tsc** command again and the error is no more displayed. So now, you can run this command to start your node application.

```
  node src/index.js
```

Then go to your browser and access **localhost:3333** to see the result.

## Configuring the Typescript

Now we are going further on typescript's configurations to avoid some errors like above, and some other issues. Run this command.

**Note: Always remember to delete the index.js file when you need to run the typescript command.**

```
  yarn tsc --init
```

Now you have a typescript's configuration file in the root of your application. Called **tsconfig.json**. Open it to take a llok in some settings. You will fine a line with this content.

```json
  "esModuleInterop": true,
```

The same information that was shows to us before. Now you can go back to your **index.ts** file and undo the change on the import.

```javascript
  import express from 'express';
```

And now to recompile our **ts** files with the settings of the **tsconfig.json** we run the typescript command without the file's argument, like this.

```
  yarn tsc
```

Now, to structure our application, we are going to setting the default's output directory to our application when typescript command runs, open the **tsconfig.json** and take a look on this line.

```json
  "outDir": "./",
```

Uncomment this and change is to the location you desire. I'll put in a **./dist** directory. So let's do this.

```json
  "outDir": "./dist",
```

Now, if you run the typescript command again, you will see the dist's folder with the index.js file on it. And then to restart your application, you just need to change the path from `node src/index.js` to `node dist/index.js`.

## Improving the typescript trnspile process

to avoid to always delete our **index.js** file, re-run the **typescript** command and re-compile our application using **node**. We are going to find a solution to make all this process even simple. In standard node applications you can use the `nodemon, Babel, or even the sucrase` to do this flux for you. In our **typescript** environment we are going to use a lib called `ts-node-dev`.

```
  yarn add -D ts-node-dev
```

Then go to your **package.json** file and create a entry called `scripts`with the following content.

```json
  "scripts": {
    "dev": "ts-node-dev --respawn --transpileOnly src/index.ts"
  }
```

Then you only need to run the following command, to transpile and run your application. And after that, access the application in your browser like before.

```
  yarn dev
```

And if you made some changes in your file, the `td-node-dev` compile your whole application automatically.

## Typescript in your code

First of all, we are going to create a routes's file to our application, called **routes.ts** in the root of the application, with the following content. Note, the route's file already contains a controller's usage, we are going to create this to.

```javascript
  import { Router } from 'express';

  // importing controllers
  import UserController from './controllers/UserController';

  // creating the routing
  const routes = Router();

  // declaring routes
  routes.get('/users', UserController.index);

  export default routes;
```

Then create the **controllers** folder under the **src**, and add the **UserController.ts** file with this content.

```javascript
  import { Request, Response } from 'express';

  const users = [
    {name: 'Some name', email: 'someemail@domain.com'},
  ];

  export default {
    async index(req: Request, res: Response) {
      return res.json(users);
    },
  };
```

Note that we are already using types for declaring variables received by the controller. This types comes from the `express` because the **req** and **res** variable are from the `node` **IRouterHandler** that extends **RequestHandler** and receive the arguments from the type **Request** and **Response**. This is the beginning of typing with typescript. And update our **index.ts** file to use this content.

```javascript
  import express from 'express';

  import routes from './routes';

  const PORT = 3333;

  const app = express();

  app.use(routes);

  app.listen(PORT);
```

Then go to browser and access **localhost:3333/users** to see the result.

# Custom Types

You always need to use some variable or some class created by yourself in your application, son, in this case, you don't have the Types from this information in a library or a decorator's dependency. In this case you have to create the type by hand. Let's do this.

First of all, we are going to create a fictitious mailer service in our application. Create a **service** folder under the **src** folder and create a **EmailService.ts** on it. This file will contains a **class** used to instantiate our service, and the functionality to send emails.

```javascript
  class EmailService {
    send(to, message) {
      console.log('Email sent');
    }
  }

  export default EmailService;
```

The two arguments of the method send need a type. We are going to create this two type using the **interface** concept. In the **EmailService.ts** file before the class, add this content.

```javascript
  // interfaces defines our custom types and the type of yours attributes.
  interface IMailTo {
    name: string,
    email: string,
  }

  interface IMailMessage {
    subject: string,
    body: string,
    attachament?: Array<string>; // The ? operator indicates not-required information.
  }

  // Data-transfer-object to transfer information between two different files in our application.
  interface MessageDTO {
    to: IMailTo,
    message: IMailMessage
  }

  // This interface determines the standard model of our EmailService's class.
  interface IEmailService {
    send(request: MessageDTO): void
  }

  class EmailService implements IEmailService {
    send({ to, message }: MessageDTO) {
      console.log(`Email sent to ${to.email}: ${message.subject}`);
    }
  }
```

And in our **UserController.ts** file add a controller to send emails. Remember to add the route to this controller in the **routes.ts** file.

```javascript
  // UserController.ts
  import EmailService from '../services/EmailService';

  ...
  async send(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendEmail(
      { name: 'Some name', email: 'someemail@domain.com' },
      { subject: 'Welcome to the system', body: 'Be welcome!'}
    );

    return res.send('OK');
  }
  ...

  //routes.ts
  ...
  routes.get('/users/send', UserController.sendEmail);
  ...
```