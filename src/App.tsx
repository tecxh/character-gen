import './App.css'
import { CharacterGenerator } from './components/CharacterGenerator'

// set isolation for BaseUI

function App() {
  return (
    <div style={{ isolation: 'isolate' }}>
      <CharacterGenerator />
    </div>
  )
}

export default App
