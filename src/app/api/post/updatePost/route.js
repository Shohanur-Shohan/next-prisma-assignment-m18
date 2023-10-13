import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

BigInt.prototype.toJSON = function() {
        return this.toString();
    }
export async function POST(req, res) {
  try {
    const body = await req.json();
    const { id } = body || {};
    const updatedData = await prisma.post.update({
      where: {
        id: Number(id),
      },
      data: body,
    });
    return NextResponse.json({ data: updatedData });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err.toString()});
  }
}
