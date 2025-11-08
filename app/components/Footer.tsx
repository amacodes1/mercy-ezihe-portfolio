export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-xs">GH</div>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-xs">LI</div>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center text-xs">TW</div>
        </a>
      </div>
      <p className="text-white/60 text-sm">© {new Date().getFullYear()} Mercy. All rights reserved.</p>
    </footer>
  )
}