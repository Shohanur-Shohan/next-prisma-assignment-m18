
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    BigInt.prototype.toJSON = function() {
      return this.toString();
    }
  try {
    const prisma = new PrismaClient();
    const body = await req.json();
    // console.log(body);
    const result = await prisma.post_comment.create({
      data: body,
    });

    return NextResponse.json({status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err.toString() });
  }
}