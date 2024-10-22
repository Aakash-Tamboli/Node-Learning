import express from 'express';
import connection from '../connection/connection.js';
const app = express();

// middleware
app.use(express.json());

app.get("/api/students",async (request,response)=>{
try
{
const data=await connection.query("select * from student");
if(!data)
{
response.status(400).send({
"success":false,
"message":"Unable to Get Student"
});
}
else
{
response.status(200).send({
"success":true,
"message":"Student Data",
"data": data[0]
});
}
}catch(error)
{
response.status(500).send({
"success":false,
"message":"Unable to Get Student, Internal issue",
"error": error
});
}
});

app.post("/api/student",async (request,response)=>{
try
{
const {body:{studentName,course}} = request;


if(!studentName || !course) return response.status(400).send({
"success":false,
"message":"Bad request, provide studentName and course"
});

const [record] = await connection.execute("insert into student (studentName,course) values(?,?)",[studentName,course]);

response.status(201).send({
"success":true,
"message":"Student added, Alloted Roll-Number: "+record[0].insertId
});
}catch(error)
{
response.status(500).send({
"success":false,
"message":"Unable to Add Student, Internal issues",
"error":error
});
}
});


app.put("/api/student/:rollNumber",async (request,response)=>{
try
{
const {body:{studentName,course}} = request;
const {rollNumber} = request.params;
const vRollNumber=parseInt(rollNumber);

if(isNaN(vRollNumber)) return response.status(400).send({
"success":false,
"message":"Bad Request, provide valid rollNumber"
});

if(!studentName || !course) return response.status(400).send({
"success":false,
"message":"Bad Request, provide student_name OR course in json"
});

const [record] = await connection.execute("select * from student where rollNumber = ?",[vRollNumber]);

if(record[0].length === 0) return response.status(404).send({
"success":false,
"message":"Unable to update, Invalid rollNumber"
});

await connection.execute("update student set studentName = ?, course = ? where rollNumber = ?",[studentName,course,vRollNumber]);

response.sendStatus(204);

}catch(error)
{
response.status(500).send({
"success":false,
"message":"Unable to update student, Internal issues",
"error":error
});
}
});

app.patch("/api/student/:rollNumber",async (request,response)=>{
try
{
const {studentName,course} = request.body;
const {rollNumber} = request.params;
const vRollNumber=parseInt(rollNumber);

if(isNaN(vRollNumber)) return response.status(400).send({
"success":false,
"message":"Bad Request, provide valid rollNumber"
});


if(!studentName && !course) return response.status(400).send({
"success":false,
"message":"Bad Request, provide studentName or course in json"
});


const [record] = await connection.execute("select * from student where rollNumber = ?",[vRollNumber]);

if(record[0].length === 0)
{
return response.status(404).send({
"success":false,
"message":"Unable to update, Invalid rollNumber"
});
}

if(studentName && course) await connection.execute("update student set studentName = ?, course = ? where rollNumber = ?",[studentName,course,vRollNumber]);
else if(studentName) await connection.execute("update student set studentName = ? where rollNumber = ?",[studentName,vRollNumber]);
else if(course) await connection.execute("update student set course = ? where rollNumber = ?",[course,vRollNumber]);
response.sendStatus(204);
}catch(error)
{
response.status(500).send({
"success":false,
"message":"Unable to update student, Internal issues",
"error":error
});
}
});

app.delete("/api/student/:rollNumber",async (request,response)=>{
    try
    {
        let {rollNumber} = request.params;
        rollNumber = parseInt(rollNumber);

        if(isNaN(rollNumber)) return response.status(400).send({
            "success": false,
            "message": "Bad Request, Invalid rollNumber"
        });

        await connection.execute("delete from student where rollNumber = ?",[rollNumber]);

        response.sendStatus(200);

    }catch(error)
    {
        response.status(500).send({
            "success": false,
            "message": "Unable to Delete Student, Internal Issue",
            "error": error
        });
    }
});



try
{
connection.query("select 1");
const PORT = 5000;
app.listen(PORT,()=>{
console.log("Server is listening at: "+PORT+"....");
});
}catch(error)
{
console.log("Unable to create Server Reason :");
console.log(error);
}

