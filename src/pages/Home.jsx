import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  useEffect(() => { document.title = 'Home' }, [])
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">Welcome</h1>
      <p className="mb-4">Browse people, search by name, and save your favorites.</p>
      <Link to="/users" className="text-blue-600 dark:text-blue-400 hover:underline">Go to users</Link>
    </div>
  )
}
export default Home