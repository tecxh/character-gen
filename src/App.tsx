import { Fragment } from 'react'
import './App.css'
import { GeneratorMenu } from './components/GeneratorMenu'
import { CharacterProvider } from './lib/CharacterContext'
import { CharacterInfoDisplay } from './components/CharacterInfoDisplay'
import { DataProvider } from './lib/DataContext'

function App() {

  return (
    <Fragment>
      <DataProvider>
        <CharacterProvider>
          <div id="container">
            <div>
              <GeneratorMenu />
            </div>
            <div>
              <p>character display</p>
            </div>
            <div>
              <CharacterInfoDisplay />
            </div>
          </div>
        </CharacterProvider>
      </DataProvider>
    </Fragment>
  )
}

export default App
