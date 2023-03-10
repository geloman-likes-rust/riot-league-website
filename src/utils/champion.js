function videoKey(key) {
  if (key >= 100) {
    return `0${key}`;
  } else if (key >= 10) {
    return `00${key}`;
  } else if (key >= 0) {
    return `000${key}`;
  }
}
function flatChampion({ data }) {
  const champion = data[Object.keys(data)[0]];
  const spell_image_endpoint =
    "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell";
  const passive_image_endpoint =
    "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive";
  const image_endpoint = {
    full: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash",
    group: "https://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion",
    sprite: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading",
  };
  return {
    key: champion.key,
    name: champion.name,
    lore: champion.lore,
    title: champion.title,
    role: champion.tags,
    stats: champion.stats,
    difficulty: Math.ceil(champion.info.difficulty / 3),
    skills: champion.spells.map((spell, index) => {
      const SKILL_KEYS = ["Q", "W", "E", "R"];
      return {
        ...spell,
        id: SKILL_KEYS[index],
        key: videoKey(champion.key),
        image: `${spell_image_endpoint}/${spell.id}.png`,
      };
    }),
    skins: champion.skins.map((skin) => {
      return {
        name: skin.name,
        image: `${image_endpoint.full}/${champion.id}_${skin.num}.jpg`,
      };
    }),
    image: {
      full: `${image_endpoint.full}/${champion.id}_0.jpg`,
      group: `${image_endpoint.group}/${champion.id}.png`,
      sprite: `${image_endpoint.sprite}/${champion.id}_0.jpg`,
    },
    enemy_tips: champion.enemytips,
    passive: {
      description: champion.passive.description,
      image: `${passive_image_endpoint}/${champion.passive.image.full}`,
      name: champion.passive.name,
    },
  };
}

export async function fetchChampion(champion) {
  try {
    const ENDPOINT =
      "https://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion";
    const response = await fetch(`${ENDPOINT}/${champion}.json`);
    const data = await response.json();
    return [flatChampion(data), null];
  } catch (error) {
    return [null, error];
  }
}
