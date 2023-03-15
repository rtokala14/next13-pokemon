import PokemonTable from "@/components/PokemonTable";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  return (
    <main>
      <PokemonTable pokemons={data} />
    </main>
  );
}
