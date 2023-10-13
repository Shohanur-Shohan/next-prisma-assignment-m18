// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
// import { PrismaClient } from "@prisma/client";

// export async function POST(req, res){

//         const prisma = new PrismaClient();
//         BigInt.prototype.toJSON = function () {
//                 return this.toString();
//         };
//         try{ 
                
//                 const reqBody = await req.json();
//                 console.log(reqBody);
//                 let result = await prisma.post.create({                       
//                         data:reqBody
//                 });
//                 return NextResponse.json({status: "success", data: result})
//         }catch(err){
//                 return NextResponse.json({status: "Failed at user", data: err.toString()});
//         }  
// }


// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

// const prismaClient = new PrismaClient();

// BigInt.prototype.toJSON = function () {
//   return this.toString();
// };

// export async function POST(request, response) {
//   try {
//     const requestBody = await request.json();
//     const id = requestBody.id ? requestBody.id : 0;
//     const result = await prismaClient.post.create({
//       where: { id: id },
// //       update: requestBody,
//       data: requestBody,
//     });

//     return NextResponse.json({ status: "success", data: result });
//   } catch (error) {
//     return NextResponse.json({ status: "failed", data: error.toString() });
//   }
// }

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function POST(req, res) {
  try {
    const body = await req.json();
    const Data = await prisma.post.create({
      data: body,
    });

    return NextResponse.json({status: "success", data: Data });
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err.toString() });
  }
}