const BASE_URL = "https://www.dnd5eapi.co";

async function getAllClasses() {
  const classIndex = await fetch(BASE_URL + "/api/classes")
    .then((response) => response.json());

  return Promise.all(
    classIndex.results.map((index) => 
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
}

export { getAllClasses };
