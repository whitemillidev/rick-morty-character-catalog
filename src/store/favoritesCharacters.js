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

export function filteredFavChar(favoritesCharacters, filters, nameFavChar) {
  const { favCharStatus, favCharGender, favCharSpecies, favCharSorting } = filters;

  return favoritesCharacters
    .filter((char) => char.name.toLowerCase().includes(nameFavChar.toLowerCase()))
    .filter((char) => (favCharStatus === "All status" ? true : char.status === favCharStatus))
    .filter((char) => (favCharGender === "All gender" ? true : char.gender === favCharGender))
    .filter((char) => (favCharSpecies === "All species" ? true : char.species === favCharSpecies))
    .toSorted((a, b) =>
      favCharSorting === "Without sorting"
        ? 0
        : favCharSorting === "Name A-Z"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name),
    );
}

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
