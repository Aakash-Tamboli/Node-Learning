import express from 'express';
import {query,body,validationResult,matchedData,checkSchema} from 'express-validator'; // to validate query parameters
import {studentValidationForQueryParameters,studentValidationForJSON} from './utils/validator/studentValidationSchemas.js';
/*
How to validate Get Or Post type request data ?
In Get, we recive data in query string So 
    - import query function from express-validator
    - Always Remember this query().bunch_validators_of_methods never rejects even if it was wrong.
    - You have to handle yourself.
    - Through validationResult we can get results of all validators.
    - Now how to validate at project level: 
        - First check in-line like -> app.(url,query("fileName").validator methods,()=>{}). query("fieldName").isString().isEmpty().andon, So that you must sure your validation working fine.
            - use const result = validationResult(request);
            - if(result.isEmpty()) it means No Error client send right data
            - else send error code with errors result.array() it gives all data
        - Then create schema for it -> in /src/util/studentSchemas.js in it an Object for studentValidationQueryParameter
        - The import checkSchema from 'express-validator
        - use schema approach that will make your code for clean. like
                app.get(url,checkSchema(studentValidationForQueryParameters),(req,res)=>{...})

In Post, we recieve data in JSON at body
    - import body function from express-validator
    - Always Remember this body("fieldName").bunch_validators_of_methods never rejects even if it was wrong.
    - You have to handle yourself.
    - Through validationResult we can get results of all validators.
    - Now how to validate at project level: 
        - First check in-line like -> app.(url,body("fileName").validator methods,()=>{}). query("fieldName").isString().isEmpty().andon, So that you must sure your validation working fine.
            - use const result = validationResult(request);
            - if(result.isEmpty()) it means No Error client send right data
            - else send error code with errors result.array() it gives all data
        - Then create schema for it -> in /src/util/studentSchemas.js in it an Object for studentValidationPOSTJSON
        - The import checkSchema from 'express-validator
        - use schema approach that will make your code for clean. like
                app.get(url,checkSchema(studentValidationForJSON),(req,res)=>{...})

*/

const app = express();


app.post("/api/student",express.json(),checkSchema(studentValidationForJSON),(request,response)=>{
    const result = validationResult(request);
    if(!result.isEmpty()){
        console.log("There is problem in JSON: ");
        console.log(result.array());
    }
    else{
        console.log(matchedData(request));
    }
    response.sendStatus(201);
})

// in line for app.get("/api/student",query("firstName").isString().withMessage("First Name Must be String").isEmpty().withMessage("First Name Must Not be Empty").isLength({min: 3, max: 10}).withMessage("Min Character: 3 and Max Character: 10"),query("lastName").isString().isEmpty(),(request,response)=>{
app.get("/api/student",checkSchema(studentValidationForQueryParameters),(request,response)=>{    
    const result = validationResult(request); // This how we extract the conclusion of validators
    if(!result.isEmpty()){
        console.log("There is problem in query parameters: ");
        console.log(result.array());
    }
    else{
        console.log(matchedData(request));
    }
    response.sendStatus(200);
});




const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}....`);
});