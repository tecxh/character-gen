import { ClassMenu } from "./ClassMenu"
import { Button } from "./common"

export const GeneratorMenu = () => {
    // kind of steps you can move through, not locked
        // class, looks, identity
    
    return (
        <div>
            <p>generator menu</p>
            <ClassMenu />
            <Button label="previous" onClick={() => console.info('prev clicked')} />
            <Button label="next" onClick={() => console.info('next clicked')} />
        </div>
    )
}