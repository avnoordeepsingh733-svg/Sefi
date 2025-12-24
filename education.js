async function loadEducation(country, code) {
  const res = await fetch(
    `https://api.openalex.org/works?filter=institutions.country_code:${code}&per-page=10`
  );

  const data = await res.json();
  const box = document.getElementById(`edu-${country}`);

  box.innerHTML = "";
  data.results.forEach(w => {
    box.innerHTML += `<p>${w.title} (${w.publication_year})</p>`;
  });
}

loadEducation("india", "IN");
