const app=require("./server"); 
const router=require("./src/routes/routes");

app.listen(3000, () => {
    console.log("Escuchando el puerto 3000");
  }); 
app.use(router); 