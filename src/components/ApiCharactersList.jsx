import { useEffect } from "react";
import { useCharacters, getCharacters } from "../store/characters";
import styles from "../styles/character-catalog.module.css";
import CharactersCard from "./CharactersCard";
import { useShallow } from "zustand/shallow";

function selectCharacters(state) {
  if (state.localFilters.sorting === "Name A-Z") {
    return state.characters.toSorted((a, b) => a.name.localeCompare(b.name));
  }
  if (state.localFilters.sorting === "Name Z-A") {
    return state.characters.toSorted((a, b) => b.name.localeCompare(a.name));
  }
  return state.characters;
}

export default function ApiCharactersList() {
  const characters = useCharacters(useShallow(selectCharacters));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [characters]);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className={styles["characters-list"]}>
      {characters.length === 0 ? (
        <div className={styles["error_characters-undefined"]}>Characters not found</div>
      ) : (
        characters.map((character) => {
          return <CharactersCard key={character.id} character={character} />;
        })
      )}
    </div>
  );
}
