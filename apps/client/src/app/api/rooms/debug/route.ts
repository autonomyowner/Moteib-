import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const roomName = url.searchParams.get("roomName");

    // Since rooms are now ephemeral, just return debug info about room name validation
    const roomNameRegex = /^[a-zA-Z0-9_-]+$/;
    const isValidFormat = roomName ? roomNameRegex.test(roomName) : null;

    return NextResponse.json({ 
      debug: {
        message: "Rooms are now ephemeral (no database storage)",
        roomName,
        isValidFormat,
        note: "Room names must match pattern: /^[a-zA-Z0-9_-]+$/"
      }
    }, { status: 200 });
  } catch (error) {
    console.error("Debug error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
