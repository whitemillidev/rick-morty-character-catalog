import FavoritesCharactersList from "./FavoritesCharactersList";
import ApiCharactersList from "./ApiCharactersList";
import { useCharacters } from "../store/characters";

export default function CharactersList() {
  const isActive = useCharacters((state) => state.isActive);

  if (isActive) {
    return <FavoritesCharactersList />;
  }

  return <ApiCharactersList />;
}
