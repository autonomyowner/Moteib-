import { NextRequest, NextResponse } from "next/server";
import { AccessToken, VideoGrant, TrackSource } from "livekit-server-sdk";

export const runtime = "nodejs";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const room = url.searchParams.get("room");
    const identity = url.searchParams.get("identity") ?? crypto.randomUUID();
    const name = url.searchParams.get("name") ?? "Guest";
    
    if (!room) {
      return NextResponse.json({ error: "Missing room" }, { status: 400 });
    }

    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;

    if (!apiKey || !apiSecret) {
      console.error("LiveKit credentials missing:", { 
        hasKey: !!apiKey, 
        hasSecret: !!apiSecret 
      });
      return NextResponse.json(
        { error: "LiveKit not configured. Missing LIVEKIT_API_KEY or LIVEKIT_API_SECRET" },
        { status: 500 }
      );
    }

    const at = new AccessToken(apiKey, apiSecret, { identity, name });
    
    at.addGrant({
      room,
      roomJoin: true,
      canPublish: true,
      canPublishData: true,
      canSubscribe: true,
      canPublishSources: [TrackSource.MICROPHONE, TrackSource.SCREEN_SHARE],
    } as VideoGrant);

    const token = await at.toJwt();

    return NextResponse.json(
      { token },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Error generating LiveKit token:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate token" },
      { status: 500 }
    );
  }
}

