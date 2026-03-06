import { create } from "zustand";

export const statusOptions = ["All status", "Alive", "Dead", "unknown"];
export const genderOptions = ["All gender", "Male", "Female", "Genderless", "unknown"];
export const speciesOptions = [
  "All species",
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological Creature",
  "Animal",
  "Robot",
  "Cronenberg",
  "Disease",
  "unknown",
];
export const sortingOptions = ["Without sorting", "Name A-Z", "Name Z-A"];

const defFavCharFilters = {
  favCharStatus: "All status",
  favCharGender: "All gender",
  favCharSpecies: "All species",
  favCharSorting: "Without sorting",
};

export const useFavoriteCharacters = create(() => ({
  favoritesCharacters: [],
  nameFavChar: "",
  statusOptions,
  genderOptions,
  speciesOptions,
  sortingOptions,
  favCharFilters: defFavCharFilters,
}));

export function setNameFavChar(nameFavChar) {
  useFavoriteCharacters.setState({ nameFavChar });
}

export function setFavoritesCharacters(favoritesCharacters) {
  useFavoriteCharacters.setState({ favoritesCharacters });
}

export function setFavCharFilter(key, value) {
  useFavoriteCharacters.setState((state) => ({
    favCharFilters: { ...state.favCharFilters, [key]: value },
  }));
}

export function resetFilters() {
  const { favCharFilters } = useFavoriteCharacters.getState();

  const isDefFilters =
    favCharFilters.favCharStatus === defFavCharFilters.favCharStatus &&
    favCharFilters.favCharGender === defFavCharFilters.favCharGender &&
    favCharFilters.favCharSpecies === defFavCharFilters.favCharSpecies &&
    favCharFilters.favCharSorting === defFavCharFilters.favCharSorting;

  if (isDefFilters) return;

  useFavoriteCharacters.setState({ favCharFilters: defFavCharFilters });
}
