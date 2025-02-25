const express = require("express");
const app = express();

app.use(express.json()); 

app.use((req, res, next) =>{
    const startTime = Date.now();

    res.on("finish",()=>{
        const endTime = Date.now();
        const totalTime  = endTime-startTime;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${totalTime}ms| Logging by: Manaswini Sasmal `);

        if (req.method === "POST") {
            console.log("Request Body:", req.body);  
        }
    })
    next();
})

app.get("/", (req,res) =>{
    res.send("Hello middleware!")
});

app.post("/submit", (req,res) => {

   res.send("This is post request in middleware!");
   
});

const PORT = 5500;
app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
});