import prisma  from '@/prisma';
import { NextResponse } from "next/server";
import { main } from "../route";

export const GET =  async (req: Request, res : NextResponse) => {
    try {
        await main();
        const id = req.url.split("/blog/")[1];
        const post = await prisma.post.findFirst({where : {id}});
        if (!post){
            return NextResponse.json({message : "Post not found"},{status:404}) ;
        }
        return NextResponse.json({message : "Success", post},{status:200}) ;
    }
    catch(err){
        return NextResponse.json({message : "not able to fetch", err},{status:500}) ;
    }
    finally {
        await prisma.$disconnect();
    }
}



export const PUT =  async (req: Request, res : NextResponse) => {
    try {
        await main();
        const id = req.url.split("/blog/")[1];
        const { title, description } = await req.json();
        const date = Date.now().toString();

        const post = await prisma.post.update({ 
            data: { description : description, title : title} , 
            where : {id}});
        
        return NextResponse.json({message : "Success", post},{status:200}) ;
    }
    catch(err){
        return NextResponse.json({message : "not able to update", err},{status:500}) ;
    }
    finally {
        await prisma.$disconnect();
    }
}


export const DELETE =  async (req: Request, res : NextResponse) => {
    try {
        await main();
        const id = req.url.split("/blog/")[1];
        const post = await prisma.post.delete({where : {id}});
        
        return NextResponse.json({message : "Success"},{status:202}) ;
    }
    catch(err){
        return NextResponse.json({message : "not able to delete", err},{status:500}) ;
    }
    finally {
        await prisma.$disconnect();
    }
}
