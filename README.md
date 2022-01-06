## Exercise 1 - a message

Build a small express application that keeps in memory a "message" which is a string value — initially, this message is an empty string. The application, when running, should answer to the following HTTP requests:
  * `POST /message` — sets the value of the message, using JSON data
  * `GET /message` — gets the current value of the message returned inside JSON data

To complete this exercise, you'll need to:
  * Declare [express routes](https://expressjs.com/en/guide/routing.html)
  * Use the [`express.json()` middleware](https://masteringjs.io/tutorials/express/body) to read JSON request data 

Run `node index.js` to start the application
You can use `curl` in a separate terminal tab with the following commands to check the expected result (assuming your app is running on the port 3000):

```
$ curl -XGET http://localhost:3000/message 
{ "message": "" }


$ curl -XPOST http://localhost:3000/message -H 'content-type: application/json' -d '{ "message": "Hello, Makers" }'


$ curl -XGET http://localhost:3000/message 
{ "message": "Hello, Makers" }

$ curl -XPOST http://localhost:3000/message -H 'content-type: application/json' -d '{ "message": "Good bye!" }'

$ curl -XGET http://localhost:3000/message 
{ "message": "Good bye!" }
```

## Exercise 2 - a counter

Build a small express application that keeps in memory a counter which starts at 0. The application, when running, should answer to the following HTTP requests:
  * `POST /counter` — increment the counter by 1.
  * `GET /counter` — gets the value of the counter
  * `DELETE /counter` — resets the value of the counter to 0.

You can use `curl` with the following commands to check the expected result (assuming your app is running on the port 3000):

```
$ curl -XGET http://localhost:3000/counter 
{ "counter": 0 }

$ curl -XPOST http://localhost:3000/counter 
$ curl -XPOST http://localhost:3000/counter 

$ curl -XGET http://localhost:3000/counter 
{ "counter": 2 }

$ curl -XDELETE http://localhost:3000/counter 

$ curl -XGET http://localhost:3000/counter 
{ "counter": 0 }
```
