import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const roomName = url.searchParams.get("roomName");

    if (!roomName) {
      return NextResponse.json(
        { error: "Room name is required" },
        { status: 400 }
      );
    }

    // Validate room name format (alphanumeric, hyphens, underscores only)
    const roomNameRegex = /^[a-zA-Z0-9_-]+$/;
    if (!roomNameRegex.test(roomName)) {
      return NextResponse.json(
        { error: "Invalid room name format" },
        { status: 400 }
      );
    }

    // Return success for valid room names (ephemeral rooms, no existence check)
    return NextResponse.json({ 
      room: {
        room_name: roomName,
        title: "Voice Room",
        description: "",
        max_participants: 10,
        created_at: new Date().toISOString()
      }
    }, { status: 200 });
  } catch (error) {
    console.error("Error joining room:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
