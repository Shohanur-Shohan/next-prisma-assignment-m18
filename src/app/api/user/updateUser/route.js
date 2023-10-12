import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res){   

    BigInt.prototype.toJSON = function() {
        return this.toString();
    }

    try{ 
            const prisma = new PrismaClient();
            const reqBody = await req.json();

            const updatedName   = await reqBody.firstName;
            const updatedMiddle = await reqBody.middleName;
            const updatedLast   = await reqBody.lastName;
            const updatedMobile = await reqBody.mobile;
            const updatedEmail = await reqBody.email;
            const updatedPasswordHash = await reqBody.passwordHash;
            const updatedIntro = await reqBody.intro;
            const updatedProfile = await reqBody.profile;

            const {searchParams} = new URL(req.url);
            let id = searchParams.get("id");
            const result = await prisma.user.update({
                where: {id: id},
                data:{ firstName: updatedName, 
                       middleName: updatedMiddle, 
                       lastName: updatedLast,
                       mobile: updatedMobile,
                       email: updatedEmail,
                       passwordHash: updatedPasswordHash,
                       intro: updatedIntro,
                       profile: updatedProfile

                }}
            );
            return NextResponse.json({status: "success", data: result})
    }catch(err){
            return NextResponse.json({status: "Failed at user", data: err.toString()});
    }   
}
