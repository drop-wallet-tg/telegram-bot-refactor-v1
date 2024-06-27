const { releyTransaction }=require("./src");
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors())
app.use(express.json());

app.post("/relay",async(req,res)=>{
    const body = req.body;
    const rs = await releyTransaction(JSON.parse(body.delegate));
    const data = rs.result;
    console.log("reuslt: ",rs)
    res.json(data);
})
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});