export interface Location {
  key: string;
  label: string;
  personLabel: string;
  flavorText: string;
  passives: string[];
  abilities: string[];
}

export interface Passive {
  key: string;
  effect: {
    direction: string;
    attribute: string;
    value: number;
  }
}

export interface OriginalClass {
  key: string;
  label: string;
  flavorText: string;
  passives: string[];
  abilities: string[];
}