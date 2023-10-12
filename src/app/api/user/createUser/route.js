import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res){

        
        BigInt.prototype.toJSON = function () {
                return this.toString();
        };
        try{ 
                const prisma = new PrismaClient();
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