const express = require('express');
const app = express();
app.set("view engine","ejs");


app.get("/",(request,response)=>{
response.render("abcd",{ title: "Home", 
message1: "God is Great", 
message2: "God is known for his Systamatic Miracle", 
message3: "God is a good shephered, mentor and provider",
message4: "God is known for his Mercy and grace",
message5: "God is super most elder in our house "
});

});

const PORT = 5000;
app.listen(PORT,()=>{
console.log(`Server is listening at: ${PORT}`);
});
