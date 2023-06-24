const express = require('express')
const app = express()
//it converts all the data from json to javascript objects when we get the data from the backend
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', function(req, res) {
    //get data from database, prepare data and send it to frontend
    const response = {
        name: "Theerthani Malluri", 
        email: "theerthanmalluri@gmail.com", 
        interests: "coding"
    }
    res.send(response)
})

app.post('/update-profile', function(req, res) {
    const payload = req.body 
    console.log(payload)
    //saving payload into database if we have a database
    if (Object.keys(payload).length === 0) {
        res.status(404).send({error: "empty payload. Couldn't update user profile data"})
    } else {
        // updating user profile
        res.status(200).send({info: "user profile data updated successfully"})
    }

})

//logic to start the application
app.listen(3000, function () {
    //specify a logic when application starts
    console.log("app listening on port 3000")
})

//first usecase of backend is to serve the frontend code. if it is in js we can directly proceed but since it is in 
//vue.js first we need to compile it to convert it into js before sending to the frontend.so in conclusion
//Without Vue.js => serve the plain javascript directly to the browser
//With Vue.js => transpile vue.js to JavaScript, before sending to the frontend

//fetch or get data is the second step from backend to frontend

