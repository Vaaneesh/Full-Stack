import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function inserData(email:string,password:string,firstname:string){
    let user=await prisma.user.create({
        data:{
            email,
            password,
            firstname
        }
    })
    console.log(user);
}
inserData("vasu@gmail.com","vasu123","Vasu");