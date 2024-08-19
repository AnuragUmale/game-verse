import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/lib/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

        const pageSize = 10;


        const {user} = await validateRequest();

        if (!user){
            return Response.json({error: "Unauthorized"}, {status: 401})
        }

        const posts = await prisma.post.findMany({
            include: postDataInclude,
            orderBy: {createdAt: "desc"},
            take: pageSize + 1,
            cursor: cursor ? { id: cursor } : undefined,

        })

        const nextCursor = posts.length > pageSize ? posts[pageSize].id : null
        
        return Response.json(posts);
    }
    catch(error){
        console.error(error);
        return Response.json({error: "Internal Server Error"}, {status: 500})
    }
}