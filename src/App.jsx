import React from "react";
import styles from "./styles/character-catalog.module.css";
import InfoCharacters from "./components/InfoCharacters";
import SearchCharacters from "./components/SearchCharacters";
import SortingCharacters from "./components/SortingCharacters";
import ActiveCard from "./components/ActiveCard";
import Pagination from "./components/Pagination";
import CharactersList from "./components/CharactersList";
import TestUseTheme from "./test-hooks-components/TestUseTheme";
import TestUseDocumentTitle from "./test-hooks-components/TestUseDocumentTitle";
import TestUseToggle from "./test-hooks-components/TestUseToggle";
import TestUseDebounce from "./test-hooks-components/TestUseDebounce";
import TestUseThrottle from "./test-hooks-components/TestUseThrottle";

export default function RickMortyCharacterCatalog() {
  return (
    <div className={styles[`app_character-catalog`]}>
      <header className={styles["app_header"]}>
        <h1 className={styles["app-title"]}>Rick & Morty — character catalog</h1>
      </header>

      <main className={styles["app_main-container"]}>
        <InfoCharacters />
        <SearchCharacters />
        <SortingCharacters />
        <CharactersList />
      </main>

      <ActiveCard />
      <Pagination />
      {/* <TestUseTheme /> */}
      {/* <TestUseDocumentTitle /> */}
      {/* <TestUseToggle /> */}
      {/* <TestUseDebounce /> */}
      <TestUseThrottle />
    </div>
  );
}
