import { NextRequest, NextResponse } from 'next/server'
import { sendMessageToGPT } from '@/lib/sendMessageToGPT'

export async function POST(req: NextRequest) {
  const { text: message } = await req.json()

  try {
    const gptResponseMessage = await sendMessageToGPT(message)
    return NextResponse.json(gptResponseMessage, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
