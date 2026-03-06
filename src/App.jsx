import React, { useEffect } from "react";
import styles from "./styles/character-catalog.module.css";
import InfoCharacters from "./components/InfoCharacters";
import SearchCharacters from "./components/SearchCharacters";
import SortingCharacters from "./components/SortingCharacters";
import ActiveCard from "./components/ActiveCard";
import { useCharacters } from "./store/characters";
import Pagination from "./components/Pagination";
import CharactersList from "./components/CharactersList";

export default function RickMortyCharacterCatalog() {
  const activeCard = useCharacters((state) => state.activeCard);

  return (
    <div className={styles[`app_character-catalog`]}>
      <header className={styles["app_header"]}>
        <h1 className={styles["app-title"]}>Rick & Morty — character catalog</h1>
      </header>

      <main
        className={activeCard === null ? styles["app_main-container-active-card-hidden"] : styles["app_main-container"]}
      >
        <InfoCharacters />
        <SearchCharacters />
        <SortingCharacters />
        <CharactersList />
      </main>

      <ActiveCard />
      <Pagination />
    </div>
  );
}
