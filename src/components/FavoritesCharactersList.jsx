import React from "react";
import styles from "../styles/character-catalog.module.css";
import { useShallow } from "zustand/shallow";
import { useFavoriteCharacters } from "../store/favoritesCharacters";
import CharactersCard from "./CharactersCard";

export default function FavoritesCharactersList() {
  const nameFavChar = useFavoriteCharacters((state) => state.nameFavChar);
  const favCharStatus = useFavoriteCharacters((state) => state.favCharFilters.favCharStatus);
  const favCharGender = useFavoriteCharacters((state) => state.favCharFilters.favCharGender);
  const favCharSpecies = useFavoriteCharacters((state) => state.favCharFilters.favCharSpecies);
  const favCharSorting = useFavoriteCharacters((state) => state.favCharFilters.favCharSorting);
  const favoritesCharacters = useFavoriteCharacters(
    useShallow((state) => {
      return state.favoritesCharacters
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
    }),
  );


  return (
    <div className={styles["characters-list"]}>
      {favoritesCharacters.length === 0 ? (
        <div className={styles["error_characters-undefined"]}>Characters not found</div>
      ) : (
        favoritesCharacters.map((character) => {
          return <CharactersCard key={character.id} character={character} />;
        })
      )}
    </div>
  );
}
