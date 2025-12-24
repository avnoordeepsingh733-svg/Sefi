const NEWS_WORKER = "https://sajan.darmindark691.workers.dev";

async function loadNews(country) {
  const box = document.getElementById(`news-${country}`);
  const res = await fetch(`${NEWS_WORKER}?country=${country}`);
  const data = await res.json();

  const items = [
    ...(data.articles?.top || []),
    ...(data.articles?.basic || [])
  ];

  box.innerHTML = "";
  items.slice(0, 10).forEach(n => {
    box.innerHTML += `<p>${n.title}</p>`;
  });
}

loadNews("india");
