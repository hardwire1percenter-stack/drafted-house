import { NextResponse } from 'next/server';

// THE SHADOW LEDGER (In-Memory Database)
// This tracks the votes while the server is running.
let votes = {
  yes: 15420,  // Realistic starting seed for viral momentum
  no: 410,
  veto: 12
};

// SPAM PREVENTION
// We track IP addresses to ensure 1 person = 1 vote per session
const votedIPs = new Set<string>();

export async function GET(request: Request) {
  return NextResponse.json({ 
    ...votes,
    alreadyVoted: false 
  });
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown-ip';
    
    // Check for double voting
    if (votedIPs.has(ip)) {
      return NextResponse.json({ ...votes, alreadyVoted: true });
    }

    const body = await request.json();
    const { type } = body;

    // Increment the ledger
    if (type === 'yes') votes.yes++;
    if (type === 'no') votes.no++;
    if (type === 'veto') votes.veto++;

    // Lock this user out for this session
    votedIPs.add(ip);

    return NextResponse.json({ ...votes, alreadyVoted: false });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
