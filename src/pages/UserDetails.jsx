import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { USERS } from '../data/users'
import ErrorMessage from '../components/ErrorMessage'

function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  // Re-runs whenever the id in the URL changes
  useEffect(() => {
    const found = USERS.find((u) => u.id === Number(id))
    setUser(found || null)
  }, [id])

  useEffect(() => {
    document.title = user ? user.name : 'User not found'
  }, [user])

  return (
    <div>
      <Link to="/users" className="text-blue-600 dark:text-blue-400 hover:underline">
        &larr; Back to users
      </Link>
      {user ? (
        <div className="mt-4 p-6 rounded-lg bg-white dark:bg-gray-800 shadow">
          <h1 className="text-2xl font-bold mb-3">{user.name}</h1>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      ) : (
        <ErrorMessage message="User not found" />
      )}
    </div>
  )
}

export default UserDetails