import { CommonScreen, OriginLocationScreen, OriginClassScreen, DeityChoiceScreen } from "./menuScreens"
import { Button } from "~components/common";

interface GeneratorMenuProps {
  step: number;
  increaseStep: () => void;
  decreaseStep: () => void;
}

export const GeneratorMenu = ({ step, increaseStep, decreaseStep }: GeneratorMenuProps) => {
  const menuContent = (() => {
    switch (step) {
      case 1:
        return <OriginLocationScreen />;
      case 2:
        return <OriginClassScreen />;
      case 3:
        return <DeityChoiceScreen />;
      case 4:
        return <p>deity - choose abilities</p>
      default:
        // error??
        return null;
    }
  })()

  return (
    <div>
      <CommonScreen>
        {menuContent}
        <div style={{ marginTop: '4rem' }}>
          {step !== 1 && (
            <Button label="previous" onClick={decreaseStep} />
          )}
          <Button label="next" onClick={increaseStep} />
        </div>
      </CommonScreen>
    </div>
  )
}