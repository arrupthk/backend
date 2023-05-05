const express = require('express')
const router = express.Router()


router.get('/', (req,res)=>{
    res.redirect('/login')
})

router.get('/login',(req,res)=> {
    res.send(`<h1><strong> <center>Let's Chat</h1> </strong><center> <br> <br>
    <form action='/login' method="POST"> Enter Username
    <input type="text" name="username" placeholder="enter your name"/> <br> <br>
    <button> Get in </button>
    </form>
    `)
    
})

router.post('/login',(req,res)=>{
    const{ username } = req.body;
    res.redirect(`/chat/${username}`);
})


module.exports = router;