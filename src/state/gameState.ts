// src/state/gameState.ts
import create from 'zustand';

interface Tile {
  number: number;
  color: string;
}

interface Player {
  id: number;
  name: string;
  tiles: Tile[];
}

interface GameState {
  players: Player[];
  drawPile: Tile[];
  discardPile: Tile[];
  currentPlayer: number;
  createPlayers: (playerNames: string[]) => void;
  drawTile: (playerId: number) => void;
  discardTile: (playerId: number, tile: Tile) => void;
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
  players: [],
  drawPile: shuffledTiles,
  discardPile: [],
  currentPlayer: 0,
  createPlayers: (playerNames) => set({
    players: playerNames.map((name, id) => ({
      id,
      name,
      tiles: shuffledTiles.slice(id * 14, (id + 1) * 14),
    })),
  }),
  drawTile: (playerId) => set((state) => {
    const newTile = state.drawPile.pop();
    if (newTile) {
      const players = state.players.map((player) =>
        player.id === playerId ? { ...player, tiles: [...player.tiles, newTile] } : player
      );
      return { players, drawPile: state.drawPile };
    }
    return { ...state };
  }),
  discardTile: (playerId, tile) => set((state) => {
    const players = state.players.map((player) =>
      player.id === playerId
        ? { ...player, tiles: player.tiles.filter((t) => t !== tile) }
        : player
    );
    return { players, discardPile: [...state.discardPile, tile] };
  }),
  nextTurn: () => set((state) => ({
    currentPlayer: (state.currentPlayer + 1) % state.players.length,
  })),
}));
