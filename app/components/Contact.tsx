'use client'
import { useState } from 'react'
import { toast, Toaster } from 'sonner'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message }),
    })

    const data = await res.json()
    if (res.ok) {
      toast.success('Message sent successfully!')
      setEmail('')
      setMessage('')
      setStatus('')
    } else {
      toast.error(data.message || 'Failed to send message')
    }
    setStatus('')
  }

  return (
    <section id="contact" className="py-20 bg-black text-white text-center px-4">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white"
          required
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white h-32"
          required
        />
        <button type="submit" className="bg-purple-600 px-6 py-2 rounded text-white">Send Message</button>
        {status && <p className="text-white/60 mt-2">{status}</p>}
      </form>
      <Toaster position="bottom-center" theme="dark" />
    </section>
  )
}