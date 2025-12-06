// MFD

import { type ClassType, ClassTypes } from "../types";

export const Caster: ClassType = {
    type: ClassTypes.Caster,
    label: 'Caster',
    desc: 'A manipulator of the arcane and wild energies of the world.'
}

export const Warrior: ClassType = {
    type: ClassTypes.Warrior,
    label: 'Warrior',
    desc: 'A skilled weapons wielder, capable to charging the fray.'
}

export const originalClasses = [
    Caster,
    Warrior
]