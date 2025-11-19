import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID;
  const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
  const secret = process.env.KEYSTATIC_SECRET;

  // Test if we can reach GitHub OAuth endpoint
  let githubTest = 'Not tested';
  if (clientId) {
    try {
      const response = await fetch(`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`);
      githubTest = response.ok ? 'GitHub OAuth endpoint reachable' : `GitHub returned ${response.status}`;
    } catch (error) {
      githubTest = `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
    }
  }

  return NextResponse.json({
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: process.env.VERCEL,
      VERCEL_URL: process.env.VERCEL_URL,
    },
    keystatic: {
      clientId: clientId || 'NOT_SET',
      clientIdLength: clientId?.length || 0,
      hasClientSecret: !!clientSecret,
      clientSecretLength: clientSecret?.length || 0,
      hasSecret: !!secret,
      secretLength: secret?.length || 0,
      secretFormat: secret ? (secret.includes('+') || secret.includes('/') || secret.includes('=') ? 'CONTAINS_SPECIAL_CHARS' : 'ALPHANUMERIC_ONLY') : 'NOT_SET',
    },
    github: {
      expectedCallbackUrl: 'https://moteib-client.vercel.app/api/keystatic/github/oauth/callback',
      oauthTest: githubTest,
    },
    nextjs: {
      version: '15.4.6',
      appRouter: true,
    }
  });
}
