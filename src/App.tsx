import { Fragment, useState } from 'react'
import './App.css'
import { GeneratorMenu } from './components/GeneratorMenu'
import { CharacterProvider } from './lib/CharacterContext'
import { CharacterInfoDisplay } from './components/CharacterInfoDisplay'
import { DataProvider } from './lib/DataContext'
import { GeneratorNavigation } from './components/GeneratorNavigation'

function App() {
    const [step, setStep] = useState(1);
  
    const increaseStep = () => setStep(step + 1);
    const decreaseStep = () => setStep(step - 1);


  return (
    <Fragment>
      <DataProvider>
        <CharacterProvider>
          <GeneratorNavigation setStep={setStep} />
          <div id="container">
            <div>
              <GeneratorMenu step={step} increaseStep={increaseStep} decreaseStep={decreaseStep} />
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
