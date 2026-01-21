import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/app/lib/prisma";

// GET: fetch all comments
export async function GET() {
  const comments = await prisma.comment.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(comments);
}

// POST: create a new comment (auth required)
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { text } = await req.json();

  if (!text || text.trim().length === 0) {
    return NextResponse.json(
      { error: "Comment text is required" },
      { status: 400 }
    );
  }

  const comment = await prisma.comment.create({
    data: {
      text,
      userId: session.user.id as string,
      userName: session.user.name ?? "Anonymous",
    },
  });

  return NextResponse.json(comment);
}
