import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res){   

    BigInt.prototype.toJSON = function() {
        return this.toString();
    }

    try{ 
            const prisma = new PrismaClient();
            const {searchParams} = new URL(req.url);
            let id = searchParams.get("id");
            await prisma.post_comment.delete({
                    where: {id: id}
            }
            );
            return NextResponse.json({status: "success"})
    }catch(err){
            return NextResponse.json({status: "Failed at user", data: err.toString()});
    }   
}
