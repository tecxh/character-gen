import { useCharacter, useData } from "~lib/context"
import { PassiveDisplay } from "~components/common/PassiveDisplay";

export const ClassDescription = () => {
    const { class: charClass } = useCharacter();
    const { classes, passives } = useData();

    const selectedClass = classes.find((originalClass) => originalClass.key === charClass)
    // only the first for now because classes only have one passive
    // extend this when the class system is more flushed out
    const classPassive = passives.filter((passive) => selectedClass?.passives.includes(passive.key))[0]
    if (!selectedClass) return null;

    return (
        <div>
            <h2>{selectedClass.label}</h2>
            <p>{selectedClass.flavorText}</p>
            <h3>Passives</h3>
            <PassiveDisplay passive={classPassive} />
            <h3>Abilities</h3>
            {selectedClass.abilities}
        </div>
    )
}