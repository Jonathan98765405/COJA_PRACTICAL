const styles = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
}

function Button({ label, onClick, variant = 'primary', children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${styles[variant]}`}
    >
      {label} {children}
    </button>
  )
}

export default Button