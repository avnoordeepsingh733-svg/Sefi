const NEWS_WORKER = "https://sajan.darmindark691.workers.dev";

async function loadNews(country) {
  const box = document.getElementById(`news-${country}`);
  if (!box) return;

  box.innerHTML = "Loading news...";

  try {
    const res = await fetch(`${NEWS_WORKER}?country=${country}`);
    const data = await res.json();

    const items = data.results || [];

    box.innerHTML = "";

    if (items.length === 0) {
      box.innerHTML = "<p>No news</p>";
      return;
    }

    items.slice(0, 10).forEach(n => {
      box.innerHTML += `
        <p>
          <a href="${n.url}" target="_blank">${n.title}</a>
        </p>
      `;
    });

  } catch (e) {
    box.innerHTML = "<p>News error</p>";
  }
}

loadNews("india");
