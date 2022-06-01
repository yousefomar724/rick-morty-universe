export interface DataProps {
  info: Info
  results: Result[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: null
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface Location {
  name: string
  url: string
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export interface Result {
  id: number
  name: string
  status: Status
  species: Species
  type: string
  gender: Gender
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: Date
}

export interface Episode {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: Date
}

export interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: Date
}

export interface CharLocation {
  name: string
  url: string
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: CharLocation
  location: CharLocation
  image: string
  episode: string[]
  url: string
  created: Date
}

export interface BreakingBadCharacter {
  char_id: number
  name: string
  birthday: Birthday
  occupation: string[]
  img: string
  status: BreakingBadStatus
  nickname: string
  appearance: number[]
  portrayed: string
  category: Category
  better_call_saul_appearance: number[]
}

export enum Birthday {
  The07081993 = '07-08-1993',
  The08111970 = '08-11-1970',
  The09071958 = '09-07-1958',
  The09241984 = '09-24-1984',
  Unknown = 'Unknown',
}

export enum Category {
  BetterCallSaul = 'Better Call Saul',
  BreakingBad = 'Breaking Bad',
  BreakingBadBetterCallSaul = 'Breaking Bad, Better Call Saul',
}

export enum BreakingBadStatus {
  Alive = 'Alive',
  Deceased = 'Deceased',
  PresumedDead = 'Presumed dead',
  Unknown = 'Unknown',
}
