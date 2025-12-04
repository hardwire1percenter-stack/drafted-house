'use server'

import { kv } from '@vercel/kv'
import { headers } from 'next/headers'

// Get the current count (for visits or votes)
export async function getCount(key: string) {
  const value = await kv.get(key)
  return Number(value) || 0
}

// Secure Vote with IP Tracking
export async function castVote(type: string) {
  // 1. Get the user's IP address (Now using await for Next.js 16+)
  const headersList = await headers()
  const ip = headersList.get('x-forwarded-for') || 'unknown'
  
  // 2. Create a unique ID for this user's vote status
  const userKey = `voted_${ip}`

  // 3. Check if this IP has already voted
  const hasVoted = await kv.get(userKey)
  
  if (hasVoted) {
    return { success: false } // Block the vote
  }

  // 4. If new, count the vote
  await kv.incr(`vote_${type}`)
  
  // 5. Mark this IP as "Voted" forever
  await kv.set(userKey, 'true')

  return { success: true }
}

// Helper for other counters if needed
export async function incrementCount(key: string) {
  const value = await kv.incr(key)
  return Number(value)
}
