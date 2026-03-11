import React from "react";
import styles from "../styles/character-catalog.module.css";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import Button from "./Button";
import { useCharacters, setUrlPage } from "../store/characters";
import { useShallow } from "zustand/shallow";

export default function Pagination() {
  const [characters, isActive, urlPage, totalPages] = useCharacters(
    useShallow((state) => [state.characters, state.isActive, state.urlPage, state.totalPages]),
  );

  return (
    <div
      className={
        isActive || characters.length === 0 ? styles["pagination-container-hidden"] : styles["pagination-container"]
      }
    >
      <Button
        disabled={urlPage === 1}
        btnClassName={urlPage === 1 ? styles["disabled-btn"] : styles["pagination_btn-left"]}
        iconClassName={urlPage === 1 ? "" : styles["pagination_icon-left"]}
        Icon={ArrowLeftIcon}
        onClick={() => setUrlPage(urlPage - 1)}
      />
      {urlPage} of {totalPages}
      <Button
        disabled={urlPage === totalPages}
        btnClassName={urlPage === totalPages ? styles["disabled-btn"] : styles["pagination_btn-right"]}
        iconClassName={urlPage === totalPages ? "" : styles["pagination_icon-right"]}
        Icon={ArrowRightIcon}
        onClick={() => setUrlPage(urlPage + 1)}
      />
    </div>
  );
}
