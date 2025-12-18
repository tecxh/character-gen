import type { AbilityType } from "~/types"

interface AbilityRowProps {
  type: AbilityType
}

    // location or class abilities are locked by earlier choices
    // only deity abilities can be selected
export const AbilityRow = ({ type }: AbilityRowProps) => {
  const abilityLabel = 'placeholder label'
  const tempColor = type !== 'deity' ? 'gray' : 'green'

  return (
    <div style={{ display: 'flex', flexDirection: 'row', columnGap: 20}}>
      <div style={{ height: 25, width: 25, backgroundColor: tempColor }}>icon</div>
      <span>{abilityLabel}</span>
    </div>
  )
}