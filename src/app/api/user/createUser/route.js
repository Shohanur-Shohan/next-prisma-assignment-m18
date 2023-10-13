import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res){

        const prisma = new PrismaClient();
        BigInt.prototype.toJSON = function () {
                return this.toString();
        };
        try{ 
                
                const reqBody = await req.json();
                // console.log(reqBody);
                let result = await prisma.user.create({                       
                        data:reqBody
                });
                return NextResponse.json({status: "success", data: result})
        }catch(err){
                return NextResponse.json({status: "Failed at user", data: err.toString()});
        }  
}
// {
//         "authorId": "1",
//         "parentId": "0",
//         "title": "Post Title",
//         "metaTitle": "Meta Post Title", 
//         "slug": "This is slug",
//         "summary": "Summary here", 
//         "published": "2",       
//         "content": "Content here"
//       }
