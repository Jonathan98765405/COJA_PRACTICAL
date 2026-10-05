import { NavLink, Link } from 'react-router-dom'
import Button from './Button'

const linkClass = ({ isActive }) =>
  isActive ? 'font-bold underline underline-offset-4' : 'font-normal hover:underline'

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#2563eb" />
      {/* person */}
      <circle cx="16" cy="14" r="5" fill="#fff" />
      <path d="M6 28c0-5.5 4.5-9 10-9s10 3.5 10 9z" fill="#fff" />
      {/* favorite star */}
      <polygon
        points="27,4 28.18,7.38 31.76,7.45 28.9,9.62 29.94,13.05 27,11 24.06,13.05 25.1,9.62 22.24,7.45 25.82,7.38"
        fill="#fbbf24"
      />
    </svg>
  )
}

function Navbar({ favoritesCount, darkMode, onToggleDark }) {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo />
          <span className="leading-tight">
            <span className="block text-xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
              Kapwa
            </span>
            <span className="hidden sm:block text-xs text-gray-500 dark:text-gray-400">
              People directory
            </span>
          </span>
        </Link>
        <div className="flex gap-5">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/users" className={linkClass}>Users</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span>Favorites: {favoritesCount}</span>
        <Button label={darkMode ? 'Light mode' : 'Dark mode'} onClick={onToggleDark} variant="primary" />
      </div>
    </nav>
  )
}

export default Navbar