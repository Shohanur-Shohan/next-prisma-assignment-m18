
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function() {
    return this.toString();
  }

  try {
    const prisma = new PrismaClient();
    const body = await req.json();
    const Data = await prisma.post.create({
      data: body,
    });

    return NextResponse.json({status: "success", data: Data });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err.toString() });
  }
}