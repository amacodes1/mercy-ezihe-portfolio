'use client'
import { useEffect, useRef } from 'react'

export default function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: Array<{
      x: number
      y: number
      length: number
      speed: number
      opacity: number
    }> = []

    const createStar = () => {
      return {
        x: Math.random() * canvas.width,
        y: -10,
        length: Math.random() * 80 + 10,
        speed: Math.random() * 3 + 2,
        opacity: Math.random() * 0.8 + 0.2
      }
    }

    for (let i = 0; i < 3; i++) {
      stars.push(createStar())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star, index) => {
        ctx.save()
        ctx.globalAlpha = star.opacity
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(star.x + star.length, star.y + star.length)
        ctx.stroke()
        ctx.restore()

        star.x += star.speed
        star.y += star.speed

        if (star.y > canvas.height + 100) {
          stars[index] = createStar()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}