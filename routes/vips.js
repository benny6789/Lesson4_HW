const express = require("express");
const{vips_ar} = require("../data/vipsjson")
const router = express.Router();

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/",async(req,res) => {
  res.json(vips_ar);
})

router.get("/single/:index",async(req,res) =>{
  const index = req.params.index;
  res.json(vips_ar[index]);
}
);

router.get("/search", async(req,res) => {
  const searchQ = req.query.s.toLowerCase();
  const filter_ar = vips_ar.filter((item) => {
    return item.name.toLowerCase().includes(searchQ)
  })
  res.json(filter_ar)
})
module.exports = router;