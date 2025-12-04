enum ClassTypes {
    Caster = 'caster',
    Warrior = 'warrior',
    BlessedKnight = 'blessed knight',
    Berzerker = 'berzerker'
}

// enum CasterSubClasses {
//     WildMage = 'wild mage', // sorcerer
//     DeathSheppard = 'death sheppard', // death domain cleric
// }

// enum BlessedKnightSubClasses {
//     LawfulOath = 'lawful oath'
// }

interface ClassType {
    type: ClassTypes;
    label: string;
    desc: string;
}


export { ClassType, ClassTypes }