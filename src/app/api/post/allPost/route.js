import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res){   
        BigInt.prototype.toJSON = function () {
                        return this.toString();
        }; 
    
        try{ 
                const prisma = new PrismaClient();
                const result = await prisma.post.findMany(
                        { orderBy: { id: "asc"} }
                );

                return NextResponse.json({status: "success", data: result})
        }catch(err){
                return NextResponse.json({status: "Failed at user", data: err.toString()});
        }   
}
