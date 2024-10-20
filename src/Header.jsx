import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
      }}
    >
      <h1>ส่วนหัวของเว็บไซต์</h1>
      <button onClick={toggleTheme}>
        เปลี่ยนธีมเป็น {theme === 'light' ? 'มืด' : 'สว่าง'}
      </button>
    </header>
  )
}
