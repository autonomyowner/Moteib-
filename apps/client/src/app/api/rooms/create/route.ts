import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 0;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { roomName, title, description, maxParticipants } = body;

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
        { error: "Room name must contain only alphanumeric characters, hyphens, and underscores" },
        { status: 400 }
      );
    }

    // Return room data without database storage (ephemeral)
    const room = {
      room_name: roomName,
      title: title || "Untitled Room",
      description: description || "",
      max_participants: maxParticipants || 10,
      is_active: true,
      created_at: new Date().toISOString(),
    };

    return NextResponse.json({ room }, { status: 201 });
  } catch (error) {
    console.error("Error creating room:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
