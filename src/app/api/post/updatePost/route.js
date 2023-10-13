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

            const updatedTitle   = await reqBody.title;
            const updatedMeta = await reqBody.metaTitle;
            const updatedSlug   = await reqBody.slug;
            const updatedSummary = await reqBody.summary;
            const updatedPublished = await reqBody.published;
            const updatedContent = await reqBody.content;
            // console.log(reqBody);

            const {searchParams} = new URL(req.url);
            let id = searchParams.get("id");
            const result = await prisma.post.update({
                where: {id: id},
                data:{ 
                    title: updatedTitle, 
                    metaTitle: updatedMeta, 
                    slug: updatedSlug,
                    summary: updatedSummary,
                    published: updatedPublished,
                    content: updatedContent,
                }}
            );
            return NextResponse.json({status: "success", data: result})
    }catch(err){
            return NextResponse.json({status: "Failed at user", data: err.toString()});
    }   
}
