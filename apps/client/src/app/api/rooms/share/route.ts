import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 0;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { roomName } = body;

    if (!roomName) {
      return NextResponse.json(
        { error: "Room name is required" },
        { status: 400 }
      );
    }

    // Validate room name format
    const roomNameRegex = /^[a-zA-Z0-9_-]+$/;
    if (!roomNameRegex.test(roomName)) {
      return NextResponse.json(
        { error: "Invalid room name format" },
        { status: 400 }
      );
    }

    // Generate shareable link
    const shareableLink = `${req.nextUrl.origin}/join/${roomName}`;

    return NextResponse.json({ 
      shareableLink,
      room: {
        room_name: roomName,
        title: "Voice Room",
        description: "",
        max_participants: 10
      }
    }, { status: 200 });
  } catch (error) {
    console.error("Error sharing room:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
