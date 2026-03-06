import ReloadIcon from "../icons/ReloadIcon";
import SearchIcon from "../icons/SearchIcon";
import { useCharacters, setName, setUrlPage } from "../store/characters";
import styles from "../styles/character-catalog.module.css";
import Button from "./Button";

export default function SearchCharacters() {
  const name = useCharacters((state) => state.name);
  const urlPage = useCharacters((state) => state.urlPage);

  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-field"]}>
        <SearchIcon className={styles["search-icon"]} />

        <input
          type={"text"}
          className={styles["input-search"]}
          placeholder={"Search by name or type..."}
          value={name}
          onChange={(e) => {
            if (urlPage > 1) setUrlPage(1);
            setName(e.target.value);
          }}
        />
      </div>

      <Button
        disabled={name === "" ? true : false}
        btnClassName={name === "" ? styles["reset-btn-disabled"] : styles["reset-btn"]}
        Icon={ReloadIcon}
        onClick={() => {
          if (urlPage > 1) setUrlPage(1);
          setName("");
        }}
      />
    </div>
  );
}
