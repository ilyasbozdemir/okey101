// src/state/gameState.ts
import create from 'zustand';

interface Tile {
  number: number;
  color: string;
}

interface Player {
  id: number;
  name: string | null;
  tiles: Tile[];
}

interface Table {
  id: number;
  players: Player[];
}

interface GameState {
  tables: Table[];
  currentTable: number | null;
  currentPlayer: number;
  drawPile: Tile[];
  discardPile: Tile[];
  createTable: () => void;
  joinTable: (tableId: number, playerName: string) => void;
  setCurrentTable: (tableId: number) => void;
  startGame: () => void;
  discardTile: (tile: Tile) => void;
  nextTurn: () => void;
}

const colors = ["red", "blue", "black", "yellow"];
const tiles: Tile[] = [];

for (let i = 1; i <= 13; i++) {
  colors.forEach(color => {
    tiles.push({ number: i, color });
    tiles.push({ number: i, color });
  });
}
tiles.push({ number: 0, color: "joker" });
tiles.push({ number: 0, color: "joker" });

const shuffledTiles = tiles.sort(() => Math.random() - 0.5);

export const useGameState = create<GameState>((set) => ({
  tables: [],
  currentTable: null,
  currentPlayer: 0,
  drawPile: shuffledTiles.slice(0, 50),
  discardPile: [],
  createTable: () => set(state => ({
    tables: [...state.tables, { id: Date.now(), players: [] }]
  })),
  joinTable: (tableId, playerName) => set(state => {
    const tableIndex = state.tables.findIndex(table => table.id === tableId);
    if (tableIndex !== -1) {
      const players = state.tables[tableIndex].players;
      if (players.length < 4) {
        players.push({ id: players.length + 1, name: playerName, tiles: [] });
      }
      state.tables[tableIndex].players = players;
    }
    return { tables: state.tables };
  }),
  setCurrentTable: (tableId) => set(() => ({
    currentTable: tableId
  })),
  startGame: () => set(state => {
    const tableIndex = state.tables.findIndex(table => table.id === state.currentTable);
    if (tableIndex !== -1 && state.tables[tableIndex].players.length === 4) {
      const newPlayers = state.tables[tableIndex].players.map(player => ({
        ...player,
        tiles: shuffledTiles.slice(0, 21),
      }));
      state.tables[tableIndex].players = newPlayers;
    }
    return { tables: state.tables };
  }),
  discardTile: (tile) => set((state) => {
    const currentTableIndex = state.tables.findIndex(table => table.id === state.currentTable);
    const currentPlayerIndex = state.currentPlayer;
    if (currentTableIndex !== -1) {
      const currentPlayer = state.tables[currentTableIndex].players[currentPlayerIndex];
      const updatedTiles = currentPlayer.tiles.filter(t => t !== tile);
      state.tables[currentTableIndex].players[currentPlayerIndex].tiles = updatedTiles;
      state.discardPile = [...state.discardPile, tile];
    }
    return { tables: state.tables, discardPile: state.discardPile };
  }),
  nextTurn: () => set((state) => ({
    currentPlayer: (state.currentPlayer + 1) % state.tables.find(table => table.id === state.currentTable)?.players.length!
  }))
}));
