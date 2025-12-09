import { Button } from "~components/common"

interface GeneratorNavigationProps {
    setStep: (step: number) => void;
}

export const GeneratorNavigation = ({ setStep }: GeneratorNavigationProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', columnGap: '1rem'}}>
            <Button label="Origins" onClick={() => setStep(1)} />
            <Button label="Deity" onClick={() => setStep(3)} />
        </div>
    )
}