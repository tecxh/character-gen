import { useData } from "~/lib/context";
import type { AbilitySlot } from "~/types"

interface AbilityRowProps {
  slot: AbilitySlot
}

    // location or class abilities are locked by earlier choices
    // only deity abilities can be selected
export const AbilityRow = ({ slot }: AbilityRowProps) => {
  const { reservedFor, abilityKey } = slot;
  const { abilities } = useData();

  const reservedForDeity = reservedFor === 'deity'
  const fallbackLabel = reservedForDeity ? 'Select from Deity Pool' : `Ability locked to ${reservedFor} choice`
  const tempColor = reservedForDeity ? 'green' : 'gray'

  const getAbilityLabel = (abilityKey: string) => abilities.find((ability) => ability.key === abilityKey)?.label
  
  const abilityLabel = abilityKey ? getAbilityLabel(abilityKey) : fallbackLabel

  return (
    <div style={{ display: 'flex', flexDirection: 'row', columnGap: 20}}>
      <div style={{ height: 25, width: 25, backgroundColor: tempColor }}>icon</div>
      <span>{abilityLabel}</span>
    </div>
  )
}