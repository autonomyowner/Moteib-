import { NextResponse } from 'next/server';
import keystaticConfig from '../../../../../keystatic.config';

export const dynamic = 'force-dynamic';

export async function GET() {
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID;
  const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
  const secret = process.env.KEYSTATIC_SECRET;

  return NextResponse.json({
    clientId: clientId ? `${clientId.substring(0, 10)}...` : 'NOT_SET',
    hasClientSecret: !!clientSecret,
    hasSecret: !!secret,
    nodeEnv: process.env.NODE_ENV,
    storage: keystaticConfig.storage,
    expectedCallbackUrl: `${process.env.VERCEL_URL || 'https://moteib-client.vercel.app'}/api/keystatic/github/oauth/callback`,
  });
}
