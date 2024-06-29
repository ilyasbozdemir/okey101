// src/state/gameState.ts
import create from 'zustand';

interface Tile {
  number: number;
  color: string;
}

interface GameState {
  playerTiles: Tile[];
  drawPile: Tile[];
  discardPile: Tile[];
  drawTile: () => void;
  discardTile: (tile: Tile) => void;
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

export const useGameState = create<GameState>((set) => ({
  playerTiles: tiles.slice(0, 21),
  drawPile: tiles.slice(21),
  discardPile: [],
  drawTile: () => set((state) => {
    const [newTile, ...remainingTiles] = state.drawPile;
    return {
      playerTiles: [...state.playerTiles, newTile],
      drawPile: remainingTiles,
    };
  }),
  discardTile: (tile) => set((state) => ({
    playerTiles: state.playerTiles.filter(t => t !== tile),
    discardPile: [...state.discardPile, tile],
  })),
}));
