import { useEffect } from 'react'

function About() {
  useEffect(() => { document.title = 'About' }, [])
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">About</h1>
      <p>A small React app built with Vite, Tailwind CSS, and React Router.</p>
    </div>
  )
}
export default About