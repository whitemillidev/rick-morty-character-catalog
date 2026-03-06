import styles from "../styles/character-catalog.module.css";
import SelectItem from "./SelectItem";
import StarIcon from "../icons/StarIcon";
import Button from "./Button";
import ReloadIcon from "../icons/ReloadIcon";
import { statusOptions, genderOptions, speciesOptions, sortingOptions } from "../store/characters";
import {
  useCharacters,
  setIsActive,
  resetFilters,
  setApiFilter,
  setLocalFilter,
  setUrlPage,
} from "../store/characters";

export default function SortingCharacters() {
  const { status, gender, species } = useCharacters((state) => state.apiFilters);
  const { sorting } = useCharacters((state) => state.localFilters);
  const urlPage = useCharacters((state) => state.urlPage);
  const isActive = useCharacters((state) => state.isActive);

  return (
    <div className={styles["select-container_sorting-characters"]}>
      <SelectItem
        id={1}
        className={styles["select_sorting-characters"]}
        options={statusOptions}
        value={status}
        onChange={(e) => setApiFilter("status", e.target.value)}
      />
      <SelectItem
        id={2}
        className={styles["select_sorting-characters"]}
        options={genderOptions}
        value={gender}
        onChange={(e) => setApiFilter("gender", e.target.value)}
      />
      <SelectItem
        id={3}
        className={styles["select_sorting-characters"]}
        options={speciesOptions}
        value={species}
        onChange={(e) => setApiFilter("species", e.target.value)}
      />
      <SelectItem
        id={4}
        className={styles["select_sorting-characters"]}
        options={sortingOptions}
        value={sorting}
        onChange={(e) => setLocalFilter("sorting", e.target.value)}
      />

      <Button
        btnClassName={isActive ? styles["btn-favorites-active"] : styles["btn-favorites"]}
        Icon={StarIcon}
        iconClassName={styles["icon-favorites"]}
        onClick={() => {
          if (!isActive) {
            setIsActive(true);
            return;
          }
          setIsActive(false);
        }}
      >
        {isActive ? "Back to all" : "Favorites"}
      </Button>

      <Button
        btnClassName={styles["btn-reset-filters"]}
        Icon={ReloadIcon}
        iconClassName={styles["icon-reset"]}
        onClick={() => {
          if (urlPage > 1) setUrlPage(1);
          resetFilters();
        }}
      >
        Reset filters
      </Button>
    </div>
  );
}
