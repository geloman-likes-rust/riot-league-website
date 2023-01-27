function flatChampion({ champion, key }) {
  return {
    name: champion.name,
    id: champion.id,
    key: champion.key,
    image: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${key}_0.jpg`,
  };
}

function flatChampions(champions) {
  return Object.keys(champions).map((champion) => {
    return flatChampion({ champion: champions[champion], key: champion });
  });
}

export async function fetchChampions() {
  try {
    const ENDPOINT =
      "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json";
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return [flatChampions(data.data), null];
  } catch (error) {
    return [null, error];
  }
}
