import styles from "../styles/character-catalog.module.css";
import StatItem from "./StatItem";
import HumansIcon from "../icons/HumansIcon";
import EyeIcon from "../icons/EyeIcon";
import StarIcon from "../icons/StarIcon";
import StatIcon from "../icons/StatIcon";
import getTopSpecies from "../utils/getTopSpecies";
import { useCharacters } from "../store/characters";
import { useFavoriteCharacters, filteredFavChar } from "../store/favoritesCharacters";
import { useShallow } from "zustand/shallow";

export default function InfoCharacters() {
  const [characters, info, isActive] = useCharacters(
    useShallow((state) => [state.characters, state.info, state.isActive]),
  );

  const [favoritesCharacters, filters, nameFavChar] = useFavoriteCharacters(
    useShallow((state) => [state.favoritesCharacters, state.favCharFilters, state.nameFavChar]),
  );

  const filteredFavoritesCharacters = filteredFavChar(favoritesCharacters, filters, nameFavChar);

  const top3Label = getTopSpecies(characters);

  return (
    <div className={styles["info-characters_container"]}>
      <StatItem
        className={styles["all-info-characters"]}
        Icon={HumansIcon}
        total={"Total"}
        label={isActive ? filteredFavoritesCharacters.length : info?.count}
      />

      <StatItem
        className={styles["all-info-characters"]}
        Icon={EyeIcon}
        total={"Shown"}
        label={isActive ? filteredFavoritesCharacters.length : characters.length}
      />

      <StatItem
        className={styles["all-info-characters"]}
        Icon={StarIcon}
        color={"#57cb60"}
        total={"Favorites"}
        label={favoritesCharacters.length}
      />

      <StatItem
        className={styles["all-info-characters"]}
        Icon={StatIcon}
        total={"Top-3 species"}
        label={top3Label}
        labelClassName={styles["all-info-characters_top3"]}
      />
    </div>
  );
}
