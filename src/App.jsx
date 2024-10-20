import Header from './Header'
import { ThemeProvider } from './ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  )
}
