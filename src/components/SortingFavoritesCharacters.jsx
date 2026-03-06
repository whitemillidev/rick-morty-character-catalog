import styles from "../styles/character-catalog.module.css";
import SelectItem from "./SelectItem";
import StarIcon from "../icons/StarIcon";
import Button from "./Button";
import ReloadIcon from "../icons/ReloadIcon";
import { useFavoriteCharacters, setFavCharFilter, resetFilters } from "../store/favoritesCharacters";
import { statusOptions, genderOptions, speciesOptions, sortingOptions } from "../store/favoritesCharacters";
import { useCharacters, setIsActive } from "../store/characters";

export default function SortingFavoritesCharacters() {
  const isActive = useCharacters((state) => state.isActive);
  const { favCharStatus, favCharGender, favCharSpecies, favCharSorting } = useFavoriteCharacters(
    (state) => state.favCharFilters,
  );

  return (
    <div className={styles["select-container_sorting-characters"]}>
      <SelectItem
        id={1}
        className={styles["select_sorting-characters"]}
        options={statusOptions}
        value={favCharStatus}
        onChange={(e) => setFavCharFilter("favCharStatus", e.target.value)}
      />
      <SelectItem
        id={2}
        className={styles["select_sorting-characters"]}
        options={genderOptions}
        value={favCharGender}
        onChange={(e) => setFavCharFilter("favCharGender", e.target.value)}
      />
      <SelectItem
        id={3}
        className={styles["select_sorting-characters"]}
        options={speciesOptions}
        value={favCharSpecies}
        onChange={(e) => setFavCharFilter("favCharSpecies", e.target.value)}
      />
      <SelectItem
        id={4}
        className={styles["select_sorting-characters"]}
        options={sortingOptions}
        value={favCharSorting}
        onChange={(e) => setFavCharFilter("favCharSorting", e.target.value)}
      />

      <Button
        btnClassName={styles["btn-favorites-active"]}
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
        Back to all
      </Button>

      <Button
        btnClassName={styles["btn-reset-filters"]}
        Icon={ReloadIcon}
        iconClassName={styles["icon-reset"]}
        onClick={resetFilters}
      >
        Reset filters
      </Button>
    </div>
  );
}
