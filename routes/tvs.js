const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/",async(req,res) =>{
    const url = "http://fs1.co.il/bus/tv.php";
    const resp= await axios.get(url);
    res.json(resp.data);
}
)

module.exports = router;