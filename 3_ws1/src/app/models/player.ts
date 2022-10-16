export interface Player {
  id: number,
  name: string,
  birthyear: number,
  // The tournament is just the name of the tournament.
  tournaments_won: string[];
}
