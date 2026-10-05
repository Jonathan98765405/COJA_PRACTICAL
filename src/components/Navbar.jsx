import { NavLink } from 'react-router-dom'
import Button from './Button'

const linkClass = ({ isActive }) =>
  isActive ? 'font-bold underline underline-offset-4' : 'font-normal hover:underline'

function Navbar({ favoritesCount, darkMode, onToggleDark }) {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <div className="flex gap-5">
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/users" className={linkClass}>Users</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <span>Favorites: {favoritesCount}</span>
        <Button label={darkMode ? 'Light mode' : 'Dark mode'} onClick={onToggleDark} variant="primary" />
      </div>
    </nav>
  )
}

export default Navbar