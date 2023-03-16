"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";
import { type Pokemon } from "@/types";

function Preloader({ pokemons }: { pokemons: Pokemon[] }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupPokemon(pokemons));
    loaded.current = true;
  }
  return null;
}

export default Preloader;
