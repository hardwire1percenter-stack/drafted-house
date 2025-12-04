'use server'

import { kv } from '@vercel/kv'

// Get the current count (for visits or votes)
export async function getCount(key: string) {
  const value = await kv.get(key)
  return Number(value) || 0
}

// Increment the count
export async function incrementCount(key: string) {
  const value = await kv.incr(key)
  return Number(value)
}
