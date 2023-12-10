export default `#graphql
  type PokemonReference {
    id: ID!
    name: String!
    url: String!
  }

  type Type {
    name: String
    url: String
  }
  
  type Types {
    slot: Int
    type: Type
  }
  
  type Stat {
    name: String
    url: String
  }
  
  type Stats {
    base_stat: Int
    effort: Int
    stat: Stat
  }
  
  type Icons {
    front_default: String
    front_female: String
  }
  
  type Generationviii {
    icons: Icons
  }
  
  type Ultrasunultramoon {
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }
  
  type Generationvii {
    ultrasunultramoon: Ultrasunultramoon
    icons: Icons
  }
  
  type Xy {
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }
  
  type Omegarubyalphasapphire {
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }
  
  type Generationvi {
    xy: Xy
    omegarubyalphasapphire: Omegarubyalphasapphire
  }
  
  type Animated {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }
  
  type Blackwhite {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
    animated: Animated
  }
  
  type Generationv {
    blackwhite: Blackwhite
  }
  
  type Platinum {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }
  
  type Heartgoldsoulsilver {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }
  
  type Diamondpearl {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }
  
  type Generationiv {
    platinum: Platinum
    heartgoldsoulsilver: Heartgoldsoulsilver
    diamondpearl: Diamondpearl
  }
  
  type Rubysapphire {
    back_default: String
    back_shiny: String
    front_default: String
    front_shiny: String
  }
  
  type Fireredleafgreen {
    back_default: String
    back_shiny: String
    front_default: String
    front_shiny: String
  }
  
  type Emerald {
    front_default: String
    front_shiny: String
  }
  
  type Generationiii {
    rubysapphire: Rubysapphire
    fireredleafgreen: Fireredleafgreen
    emerald: Emerald
  }
  
  type Silver {
    back_default: String
    back_shiny: String
    front_default: String
    front_shiny: String
    front_transparent: String
  }
  
  type Gold {
    back_default: String
    back_shiny: String
    front_default: String
    front_shiny: String
    front_transparent: String
  }
  
  type Crystal {
    back_default: String
    back_shiny: String
    back_shiny_transparent: String
    back_transparent: String
    front_default: String
    front_shiny: String
    front_shiny_transparent: String
    front_transparent: String
  }
  
  type Generationii {
    silver: Silver
    gold: Gold
    crystal: Crystal
  }
  
  type Yellow {
    back_default: String
    back_gray: String
    back_transparent: String
    front_default: String
    front_gray: String
    front_transparent: String
  }
  
  type Redblue {
    back_default: String
    back_gray: String
    back_transparent: String
    front_default: String
    front_gray: String
    front_transparent: String
  }
  
  type Generationi {
    yellow: Yellow
    redblue: Redblue
  }
  
  type Versions {
    generationviii: Generationviii
    generationvii: Generationvii
    generationvi: Generationvi
    generationv: Generationv
    generationiv: Generationiv
    generationiii: Generationiii
    generationii: Generationii
    generationi: Generationi
  }
  
  type Officialartwork {
    front_default: String
    front_shiny: String
  }
  
  type Home {
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
  }
  
  type DreamWorld {
    front_default: String
    front_female: String
  }
  
  type Other {
    officialartwork: Officialartwork
    home: Home
    dream_world: DreamWorld
  }
  
  type Sprites {
    back_default: String
    back_female: String
    back_shiny: String
    back_shiny_female: String
    front_default: String
    front_female: String
    front_shiny: String
    front_shiny_female: String
    versions: Versions
    other: Other
  }
  
  type Species {
    name: String
    url: String
  }
  
  type VersionGroup {
    name: String
    url: String
  }
  
  type MoveLearnMethod {
    name: String
    url: String
  }
  
  type VersionGroupDetails {
    level_learned_at: Int
    version_group: VersionGroup
    move_learn_method: MoveLearnMethod
  }
  
  type Move {
    name: String
    url: String
  }
  
  type Moves {
    version_group_details: [VersionGroupDetails]
    move: Move
  }
  
  type Version {
    name: String
    url: String
  }
  
  type VersionDetails {
    rarity: Int
    version: Version
  }
  
  type Item {
    name: String
    url: String
  }
  
  type HeldItems {
    version_details: [VersionDetails]
    item: Item
  }
  
  type GameIndices {
    game_index: Int
    version: Version
  }
  
  type Forms {
    name: String
    url: String
  }
  
  type Ability {
    name: String
    url: String
  }
  
  type Abilities {
    is_hidden: Boolean
    slot: Int
    ability: Ability
  }
  
  type Pokemon {
    url: String
    base_experience: Int
    height: Int
    id: Int
    is_default: Boolean
    location_area_encounters: String
    name: String
    order: Int
    weight: Int
    types: [Types]
    stats: [Stats]
    sprites: Sprites
    species: Species
    past_types: [String]
    past_abilities: [String]
    moves: [Moves]
    held_items: [HeldItems]
    game_indices: [GameIndices]
    forms: [Forms]
    abilities: [Abilities]
  }

  extend type Query {
    getAllPokemon(limit: Int): [PokemonReference]!
    getPokemon(id: ID!): Pokemon
    getFullPokemon(limit: Int): [Pokemon]!
  }
`;
