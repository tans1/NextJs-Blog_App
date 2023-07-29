import { NextResponse } from "next/server";
import prisma from "@/prisma";


// connect to the db
export async function main(){
    try {
        await prisma.$connect();
    } catch(er){
        return Error("db connection is unsuccessfull")
    }
}

export const GET = async (req: Request, res : NextResponse) => {
    try {
        await main();
        const posts = await prisma.post.findMany();
        return NextResponse.json({message : "Success", posts}, {status : 200})
    } catch(err){
        return NextResponse.json({message : 'unable to fetch data'}, {status : 500})
    }
    finally{
        // close the connection
        await prisma.$disconnect();
    }
}


export const POST = async (req: Request, res: NextResponse) => {
    await main();
    try {
      const { title, description } = await req.json();
      const post = await prisma.post.create({ data: { description : description, title : title } });
      return NextResponse.json({ message: "Success", post }, { status: 201 });
    } 
    catch (err) {
      return NextResponse.json({ message: "unable to create", err }, { status: 500 });
    } 
    finally {
      await prisma.$disconnect();
    }
  };