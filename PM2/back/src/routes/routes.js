const {Router}=require("express");
const { obtenerpeliculas} = require("../controllers/controllers");

const router=Router();

router.get("/",obtenerpeliculas);

module.exports=router;