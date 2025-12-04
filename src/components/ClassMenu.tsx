import { useEffect } from "react";
import { useState } from "react"
import { originalClasses } from "../data/classTypes";
import { type ClassType, ClassTypes } from "../types";


export const ClassMenu = () => {
    const [classSelection, setClassSelection] = useState<ClassType>();

    useEffect(() => {
        console.info('use effect')
        console.info(classSelection)
    }, [classSelection])

    const handleClassChange = (classType: ClassTypes) => {
        const newClass = originalClasses.find((ogClass) => ogClass.type === classType);
        console.info(newClass)
        setClassSelection(newClass)
    }

    return (
        <div>
            <p>Select a Class</p>
            <select value={classSelection?.type} onChange={(e) => handleClassChange(e.target.value as ClassTypes)}>
                <option>--</option>
                <option value={ClassTypes.Caster}>Caster</option>
                <option value={ClassTypes.Warrior}>Warrior</option>
                {/* <option value={ClassTypes.BlessedKnight}>Blessed Knight</option> */}
                {/* <option value={ClassTypes.Berzerker}>Berserker</option> */}
            </select>

        </div>
    )
}