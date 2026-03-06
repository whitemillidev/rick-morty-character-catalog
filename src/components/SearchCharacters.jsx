import { useCharacters } from "../store/characters";
import SearchApiCharacters from "./SearchApiCharacters";
import SearchFavoritesCharacters from "./SearchFavoritesCharacters";

export default function SearchCharacters() {
  const isActive = useCharacters((state) => state.isActive);

  if (isActive) {
    return <SearchFavoritesCharacters />;
  }

  return <SearchApiCharacters />;
}
