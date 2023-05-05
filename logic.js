const express = require('express')
const fs = require('fs')

const router = express.Router()


  
router.get('/chat/:username', (req, res) => {

    const { username } = req.params;

    let savedmsg = fs.readFileSync('chatfile.txt', 'utf-8')
    res.send(`<h2> Welcome ${username}! <br> <br>
             ${savedmsg} <br>
            <form action="/chat/${username}" method="POST">
            <input type="text" name="message" placeholder="Enter your message">
            <button type="submit">Send</button>
            </form>
            <script>
            localStorage.setItem('username', '${username}');
            </script>
    `)
})

router.post('/chat/:username', (req, res) => {
    const { username } = req.params; // Retrieve username from req.params
    const { message } = req.body;
    const details = `${username} : ${message} `;
    fs.appendFileSync('chatfile.txt', details);
    res.redirect(`/chat/${username}`);
});

module.exports = router;
