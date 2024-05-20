const BASE_URL = "https://www.dnd5eapi.co";

async function getAllRaces() {
  try {
    const raceIndexes = await fetch(BASE_URL + "/api/races").then((response) => response.json());
    return Promise.all(
      raceIndexes.results.map((index) =>
        fetch(BASE_URL + index.url).then((response) => response.json())
      )
    );
  } catch (error) {
    console.error("Failed to fetch races:", error);
    throw error;
  }
}

export { getAllRaces };
