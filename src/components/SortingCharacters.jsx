import { useCharacters } from "../store/characters";
import SortingApiCharacters from "./SortingApiCharacters";
import SortingFavoritesCharacters from "./SortingFavoritesCharacters";

export default function SortingCharacters() {
  const isActive = useCharacters((state) => state.isActive);

  if (isActive) {
    return <SortingFavoritesCharacters />;
  }

  return <SortingApiCharacters />;
}
