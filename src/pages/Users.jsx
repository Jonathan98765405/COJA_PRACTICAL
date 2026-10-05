import { useEffect, useState } from 'react'
import { USERS } from '../data/users'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  // Load users after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(USERS)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    document.title = `User (${filtered.length})`
  }, [filtered.length])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name..."
        className="w-full mb-6 px-3 py-2 rounded-md border border-gray-300 text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />
      {loading ? (
        <Loader />
      ) : filtered.length === 0 ? (
        <ErrorMessage message="No user found" />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={() => onToggleFavorite(user.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Users