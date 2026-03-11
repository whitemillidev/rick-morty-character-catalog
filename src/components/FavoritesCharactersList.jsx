import React from "react";
import styles from "../styles/character-catalog.module.css";
import { useShallow } from "zustand/shallow";
import { filteredFavChar, useFavoriteCharacters } from "../store/favoritesCharacters";
import CharactersCard from "./CharactersCard";

export default function FavoritesCharactersList() {
  const [favoritesCharacters, filters, nameFavChar] = useFavoriteCharacters(
    useShallow((state) => [state.favoritesCharacters, state.favCharFilters, state.nameFavChar]),
  );
  const filteredFavoritesCharacters = filteredFavChar(favoritesCharacters, filters, nameFavChar);

  return (
    <div className={styles["characters-list"]}>
      {filteredFavoritesCharacters.length === 0 ? (
        <div className={styles["error_characters-undefined"]}>Characters not found</div>
      ) : (
        filteredFavoritesCharacters.map((character) => {
          return <CharactersCard key={character.id} character={character} />;
        })
      )}
    </div>
  );
}
