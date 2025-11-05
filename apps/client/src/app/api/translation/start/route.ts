import { NextRequest, NextResponse } from "next/server";
import { RoomServiceClient } from "livekit-server-sdk";

// IMPORTANT: You must set LIVEKIT_URL in your server-side environment variables
// This is the URL to your LiveKit server, e.g., "https://my-livekit-server.com"
// Your VoiceRoom.tsx uses NEXT_PUBLIC_LIVEKIT_URL (client-side),
// this route needs the server-side LIVEKIT_URL.

const livekitUrl = process.env.LIVEKIT_URL!;
const apiKey = process.env.LIVEKIT_API_KEY!;
const apiSecret = process.env.LIVEKIT_API_SECRET!;

if (!livekitUrl || !apiKey || !apiSecret) {
  console.error("LiveKit server credentials not fully configured.");
}

const roomService = new RoomServiceClient(livekitUrl, apiKey, apiSecret);

export const runtime = "nodejs";
export const revalidate = 0;

export async function POST(req: NextRequest) {
  try {
    const { roomName, lang1, lang2 } = await req.json();

    if (!roomName || !lang1 || !lang2) {
      return NextResponse.json(
        { error: "Missing required fields: roomName, lang1, lang2" },
        { status: 400 }
      );
    }

    // This metadata string is what our Python agent will receive
    const metadata = `${lang1},${lang2}`;

    // This command tells the LiveKit server to dispatch a job.
    // The agent worker (Component 3) must be running and registered
    // with the agent_name 'interpreter-agent'.
    const dispatch = await roomService.dispatchAgent(
      roomName,
      'interpreter-agent',
      { metadata: metadata } // Pass the metadata string directly
    );

    return NextResponse.json(
      {
        message: 'Agent dispatched',
        dispatchId: dispatch.id
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error dispatching agent:", error);
    const errorMessage = (error instanceof Error) ? error.message : "Failed to dispatch agent";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

