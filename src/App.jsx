import React, { useEffect } from "react";
import styles from "./styles/character-catalog.module.css";
import InfoCharacters from "./components/InfoCharacters";
import SearchCharacters from "./components/SearchCharacters";
import SortingCharacters from "./components/SortingCharacters";
import ActiveCard from "./components/ActiveCard";
import SortingFavoritesCharacters from "./components/SortingFavoritesCharacters";
import SearchFavoritesCharacters from "./components/SearchFavoritesCharacters";
import { useCharacters } from "./store/characters";
import Pagination from "./components/Pagination";
import CharactersList from "./components/CharactersList";

export default function RickMortyCharacterCatalog() {
  const activeCard = useCharacters((state) => state.activeCard);
  const isActive = useCharacters((state) => state.isActive);

  return (
    <div className={styles[`app_character-catalog`]}>
      <header className={styles["app_header"]}>
        <h1 className={styles["app-title"]}>Rick & Morty — character catalog</h1>
      </header>

      <main
        className={activeCard === null ? styles["app_main-container-active-card-hidden"] : styles["app_main-container"]}
      >
        <InfoCharacters />

        {isActive ? <SearchFavoritesCharacters /> : <SearchCharacters />}

        {isActive ? <SortingFavoritesCharacters /> : <SortingCharacters />}

        <CharactersList />
      </main>

      <ActiveCard />

      <Pagination />
    </div>
  );
}
