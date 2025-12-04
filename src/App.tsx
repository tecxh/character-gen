import { useState, Fragment } from 'react'
import './App.css'
import { GeneratorMenu } from './components/GeneratorMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <div id="container">
        <div>
          <GeneratorMenu />
        </div>
        <div>
          <p>character display</p>
        </div>
        <div>
          <p>info</p>
        </div>
      </div>
    </Fragment>
  )
}

export default App
