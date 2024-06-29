// src/state/gameState.ts
import create from 'zustand';

interface Tile {
  number: number;
  color: string;
}

interface GameState {
  players: Array<{ tiles: Tile[] }>;
  drawPile: Tile[];
  discardPile: Tile[];
  currentPlayer: number;
  drawTile: () => void;
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
  players: [
    { tiles: shuffledTiles.slice(0, 21) },
    { tiles: shuffledTiles.slice(21, 42) },
    { tiles: shuffledTiles.slice(42, 63) },
    { tiles: shuffledTiles.slice(63, 84) },
  ],
  drawPile: shuffledTiles.slice(84),
  discardPile: [],
  currentPlayer: 0,
  drawTile: () => set((state) => {
    const [newTile, ...remainingTiles] = state.drawPile;
    const currentPlayerTiles = state.players[state.currentPlayer].tiles;
    currentPlayerTiles.push(newTile);
    return {
      players: [
        ...state.players.slice(0, state.currentPlayer),
        { tiles: currentPlayerTiles },
        ...state.players.slice(state.currentPlayer + 1),
      ],
      drawPile: remainingTiles,
    };
  }),
  discardTile: (tile) => set((state) => {
    const currentPlayerTiles = state.players[state.currentPlayer].tiles.filter(t => t !== tile);
    return {
      players: [
        ...state.players.slice(0, state.currentPlayer),
        { tiles: currentPlayerTiles },
        ...state.players.slice(state.currentPlayer + 1),
      ],
      discardPile: [...state.discardPile, tile],
    };
  }),
  nextTurn: () => set((state) => ({
    currentPlayer: (state.currentPlayer + 1) % state.players.length,
  })),
}));
