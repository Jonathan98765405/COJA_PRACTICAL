import { Link } from 'react-router-dom'
import Button from './Button'

function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{email}</p>
      <p className="text-sm">{company}</p>
      <div className="flex items-center justify-between mt-2">
        <Link to={`/user/${id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
          View profile
        </Link>
        <Button
          label={isFavorite ? 'Remove favorite' : 'Add favorite'}
          onClick={onToggleFavorite}
          variant={isFavorite ? 'danger' : 'primary'}
        />
      </div>
    </div>
  )
}

export default UserCard