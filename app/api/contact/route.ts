import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const { email, message } = await request.json()

  if (!email || !message) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${email}`,
      text: message,
    })

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
  }
}