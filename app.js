const express = require('express')  
const app = express() // Use express.js
app.use(express.static("/home/ubuntu/Exploration2/"))// Link an image folder
app.get('/', (req, res) => {
 res.sendFile('/home/ubuntu/Exploration2/index.html'); // Hit em with that sweet html file
})
app.get('/about', (req, res) => {
 res.send('<h2>Welcome to the about page</h2>');
})
app.listen(3000, () => console.log('Server running on port 3000')) // specifies which port to lisen to
