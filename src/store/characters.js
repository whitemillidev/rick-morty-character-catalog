import { create } from "zustand";

export const statusOptions = ["All status", "Alive", "Dead", "Unknown"];
export const genderOptions = ["All gender", "Male", "Female", "Genderless", "Unknown"];
export const speciesOptions = [
  "All species",
  "Human",
  "Alien",
  "Humanoid",
  "Poopybutthole",
  "Mythological Creature",
  "Animal",
  "Robot",
  "Cronenberg",
  "Disease",
  "Unknown",
];
export const sortingOptions = ["Without sorting", "Name A-Z", "Name Z-A"];

const defApiFilters = {
  status: "All status",
  gender: "All gender",
  species: "All species",
};

const defLocalFilters = {
  sorting: "Without sorting",
};

export const useCharacters = create(() => ({
  activeCard: null,
  isActive: false,
  timerId: null,
  characters: [],
  info: null,
  apiFilters: defApiFilters,
  localFilters: defLocalFilters,
  name: "",
  statusOptions,
  genderOptions,
  speciesOptions,
  sortingOptions,

  totalPages: 0,
  urlPage: 1,
}));

export function setIsActive(isActive) {
  useCharacters.setState({ isActive });
}

export function setActiveCard(activeCard) {
  useCharacters.setState({ activeCard });
}

export function setName(name) {
  const { timerId } = useCharacters.getState();
  useCharacters.setState({ name });

  if (timerId) {
    clearTimeout(timerId);
    useCharacters.setState({ timerId: null });
  }

  const newTimerId = setTimeout(() => {
    getCharacters();
  }, 1000);

  useCharacters.setState({ timerId: newTimerId });
}

export function setUrlPage(urlPage) {
  useCharacters.setState({ urlPage });
  getCharacters();
}

export function setApiFilter(key, value) {
  useCharacters.setState((state) => ({
    apiFilters: { ...state.apiFilters, [key]: value },
  }));

  getCharacters();
}

export function setLocalFilter(key, value) {
  useCharacters.setState((state) => ({
    localFilters: { ...state.localFilters, [key]: value },
  }));
  getCharacters();
}

export async function getCharacters() {
  const {
    name,
    urlPage,
    apiFilters: { status, gender, species },
  } = useCharacters.getState();

  const urlPage1 = urlPage * 2 - 1;
  const urlPage2 = urlPage * 2;

  const querys = `${name ? `&name=${name}` : ""}${status === "All status" ? "" : `&status=${status}`}${gender === "All gender" ? "" : `&gender=${gender}`}${species === "All species" ? "" : `&species=${species}`}`;

  const urls = [
    `https://rickandmortyapi.com/api/character?page=${urlPage1}${querys}`,
    `https://rickandmortyapi.com/api/character?page=${urlPage2}${querys}`,
  ];

  const responses = await Promise.all(urls.map((url) => fetch(url)));

  if (responses.some((response) => !response.ok)) {
    useCharacters.setState({ characters: [], info: null, totalPages: 0 });

    return;
  }

  const data = await Promise.all(responses.map((res) => res.json()));
  const allCharacters = data.flatMap((page) => (page.results ? page.results : []));
  const allInfo = data[0].info;

  useCharacters.setState({ characters: allCharacters, info: allInfo, totalPages: Math.ceil(allInfo?.count / 40) });
}

export function resetFilters() {
  const { apiFilters, localFilters } = useCharacters.getState();

  const isApiDefault =
    apiFilters.status === defApiFilters.status &&
    apiFilters.gender === defApiFilters.gender &&
    apiFilters.species === defApiFilters.species;

  const isLocalDefault = localFilters.sorting === defLocalFilters.sorting;

  if (isApiDefault && isLocalDefault) return;

  useCharacters.setState({ apiFilters: defApiFilters, localFilters: defLocalFilters });

  getCharacters();
}
