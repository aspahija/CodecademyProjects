const team = {
  _players: [
    {firstName: "Hector", lastName: "Bellerin", age: 23},
    {firstName: "Henrikh", lastName: "Mkhitaryan", age: 29},
    {firstName: "Granit", lastName: "Xhaka", age: 24}
  ],
  _games: [
    {opponent: "Orioles", teamPoints: 6, opponentPoints:3},
    {opponent: "Rays", teamPoints: 9, opponentPoints:1},
    {opponent: "Astros", teamPoints: 3, opponentPoints:4}
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Mike", "Trout", 26);
team.addPlayer("Lovro", "Majer", 20);

console.log(team.players);

team.addGame("Penguins", 17, 4);
team.addGame("Chelsea", 0, 0);
team.addGame("Lakers", 64, 59);

console.log(team.games);