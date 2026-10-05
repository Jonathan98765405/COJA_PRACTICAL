import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => { document.title = 'Page not found' }, [])
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">404 - Page not found</h1>
      <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">Back to home</Link>
    </div>
  )
}
export default NotFound