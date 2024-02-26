import { Client } from "pg";

const client=new Client({
    connectionString:"postgresql://prabhakarvaaneesh:4lRFHaIWA0QG@ep-red-mode-a1f9ukjs.ap-southeast-1.aws.neon.tech/Vaaneesh?sslmode=require"
})

async function connect() {
    await client.connect(); 
}
connect();
async function createPostTable(){
    // connect();  //bahar bhi koi dikkat ni
    const query=`CREATE TABLE posts(
        id SERIAL PRIMARY KEY,
        postname VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255)NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`
    let result=await client.query(query);
    console.log(result);
}
// createPostTable();

//insert
async function insertData(postname:string,email:string,password:string){

    const query=`INSERT INTO posts(postname,email,password)
    VALUES ($1, $2, $3);`
    const value=[postname,email,password];
    const result=await client.query(query,value);
    console.log(result);
}
insertData("Vasu","vasu@gamil.com","vasu123");

// async function updateData(postname:string,email:string,password:string){
//     const query=`UPDATE posts SET password ='vasu1234' WHERE password='vasu123';
//     `
// }