import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface UserData{
    email:string;
    password:string;
    firstname:string;
}

async function insertData(email:string,password:string,firstname:string){
    let user=await prisma.user.create({
        data:{
            email,
            password,
            firstname
        }
    })
    console.log(user);
}
let data=[
    {email:'abc@gmail.com',password:'1111',firstname:'Abc'},
    {email:'xyz@gmail.com',password:'3333',firstname:'Xyz'},
    {email:'efg@gmail.com',password:'2222',firstname:'Efg'}
]
async function insertManyData(data:UserData[]){
    try{
        const users=await prisma.user.createMany({
            data:data.map(entry=>({
                email:entry.email,
                password:entry.password,
                firstname:entry.firstname
            }))
        });
        console.log(users);
    }
    catch(error){
        console.log(error);
    }
}
async function find(id:number){
    const user=await prisma.user.findUnique({
        where:{
            id:id
        }
    });
    if(user){
        console.log(user);
    }
    else console.log("User not found");
}
async function findMany(){
    const user=await prisma.user.findMany({
        where:{
            firstname:{
                startsWith:'V'
            }
        }
    });
    if(user){
        console.log(user);
    }
    else console.log("User not found");
}
async function deleteOne(id:number){
    const user=await prisma.user.delete({
        where:{
            id:id
        }
    });
    if(user)
    console.log("User deleted");
    else console.log("User not found");
}
async function deleteMany(){
    const user=await prisma.user.deleteMany({
        where:{
            firstname:"Ashu"
        }
    });
    if(user)
    console.log("user deleted");
}
async function update(id:number){
    const user=await prisma.user.update({
        where:{
            id:id
        },
        data:{
            firstname:"Rawal Bhabhi"
        },
    });
}
function createTodo(title:string,desc:string,userId:number){
    
}
// insertManyData(data);
// find(2);
// findMany();
// deleteOne(6);
// deleteMany();
// update(13);
insertManyData(data);
// insertData("vasu@gmail.com","vasu123","Vasu");