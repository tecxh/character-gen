import { useState } from "react";
import { CharacterProvider, DataProvider } from "~lib/context"
import { GeneratorNavigation, GeneratorMenu, CharacterInfoDisplay } from "./ui";

export const CharacterGenerator = () => {
  const [step, setStep] = useState(1);

  const increaseStep = () => setStep(step + 1);
  const decreaseStep = () => setStep(step - 1);

  return (
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
  )
}