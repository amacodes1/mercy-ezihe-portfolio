'use client'
import { useState } from 'react'
import { toast, Toaster } from 'sonner'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')
  const [buttonState, setButtonState] = useState('idle') // idle, loading, success

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setButtonState('loading')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message }),
    })

    const data = await res.json()
    if (res.ok) {
      setButtonState('success')
      setTimeout(() => {
        toast.success('Message sent successfully!')
        setEmail('')
        setMessage('')
        setButtonState('idle')
      }, 3000)
    } else {
      setButtonState('error')
      setTimeout(() => {
        toast.error(data.message || 'Failed to send message')
        setButtonState('idle')
      }, 3000)
    }
  }

  return (
    <section id="contact" className="py-5 md:py-20 px-4 md:px-10 bg-black text-white text-center">
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
        <button 
          type={buttonState === 'error' ? 'button' : 'submit'}
          className={`animated-submit-btn bg-purple-600 px-6 py-2 rounded-tl-2xl rounded-br-2xl cursor-pointer text-white relative overflow-hidden ${buttonState}`}
          disabled={buttonState === 'loading'}
          onClick={buttonState === 'error' ? () => setButtonState('idle') : undefined}
        >
          <span className="btn-text">Send Me A Message</span>
          <div className="progress-bar"></div>
          <svg className="check-icon" viewBox="0 0 52 52">
            <path className="check" fill="none" d="m14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
          <svg className="error-icon" viewBox="0 0 52 52">
            <path className="error-x" fill="none" d="m16 16 20 20 m0-20-20 20"/>
          </svg>
        </button>

      </form>
      <Toaster position="bottom-center" theme="dark" />
    </section>
  )
}