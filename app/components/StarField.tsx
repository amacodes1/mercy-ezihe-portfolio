'use client'
import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Static stars
    const staticStars: Array<{ x: number; y: number; size: number; opacity: number }> = []
    for (let i = 0; i < 200; i++) {
      staticStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2
      })
    }

    // Shooting stars
    const shootingStars: Array<{
      x: number
      y: number
      length: number
      speed: number
      opacity: number
      thickness: number
    }> = []

    const createShootingStar = () => ({
      x: Math.random() * canvas.width,
      y: -10,
      length: Math.random() * 120 + 20,
      speed: Math.random() * 4 + 2,
      opacity: Math.random() * 0.8 + 0.2,
      thickness: Math.random() > 0.7 ? 2 : 1
    })

    for (let i = 0; i < 8; i++) {
      shootingStars.push(createShootingStar())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw static stars
      staticStars.forEach(star => {
        ctx.save()
        ctx.globalAlpha = star.opacity
        ctx.fillStyle = '#ffffff'
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // Draw shooting stars
      shootingStars.forEach((star, index) => {
        ctx.save()
        ctx.globalAlpha = star.opacity
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = star.thickness
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x + star.length, star.y + star.length)
        ctx.stroke()
        ctx.restore()

        star.x += star.speed
        star.y += star.speed

        if (star.y > canvas.height + 100) {
          shootingStars[index] = createShootingStar()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      resizeCanvas()
      // Regenerate static stars for new canvas size
      staticStars.length = 0
      for (let i = 0; i < 200; i++) {
        staticStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2
        })
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}