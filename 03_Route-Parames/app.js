import express from "express";

const app = express();

app.get("/profile/:username", (req,res) => {
    console.log(req.params);
    res.send(`<h1> Welcome to ${req.params.username}'s profile page </h1>`);    
});

app.get("/profile/:username/articles/:slug", (req, res)=>{
    console.log(req.params);
    const formatedSlug = req.params.slug.replace(/-/g, " ");
    res.send(`<h1> Article ${req.params.username} by ${formatedSlug} </h1>`);       
});

app.listen(3000, (req, res) => {
    console.log("Server running on port 3000");    
})
