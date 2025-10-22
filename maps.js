// maps.js
const conceptMaps = [
  { code: 'CSAO9', title: 'Programming in Java', driveId: 'your-drive-id-1', count: 2 },
  { code: 'BTAI1', title: 'Biology and Environmental Science for Engineers', driveId: 'your-drive-id-2', count: 8 },
  { code: 'CSAO4', title: 'Operating Systems Map', driveId: 'your-drive-id-3', count: 3 },
  { code: 'CSAO5', title: 'Database Management Systems', driveId: 'your-drive-id-4', count: 5 },
  { code: 'CSAO6', title: 'Design and Analysis of Algorithms', driveId: 'your-drive-id-5', count: 0 },
  { code: 'CSAO7', title: 'Computer Networks', driveId: 'your-drive-id-6', count: 8 },
  { code: 'CSAO8', title: 'Python Programming', driveId: 'your-drive-id-7', count: 6 },
  { code: 'CSAI2', title: 'Computer Architecture', driveId: 'your-drive-id-8', count: 0 },
  { code: 'CSAI3', title: 'Theory of Computation', driveId: 'your-drive-id-9', count: 6 }
];

function renderMaps(filter = "") {
  const grid = document.getElementById("mapGrid");
  grid.innerHTML = "";

  let filtered = conceptMaps.filter(m => m.title.toLowerCase().includes(filter.toLowerCase()) || m.code.toLowerCase().includes(filter.toLowerCase()));

  if (filter.trim() === "") {
    filtered = filtered.slice(0, 3);
    if (filtered.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "no-results";
      noResults.innerHTML = `<p>Search above to discover concept maps! 🔍</p>`;
      grid.appendChild(noResults);
      return;
    }
  }

  filtered.forEach((m, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute('data-count', m.count || '0');
    card.innerHTML = `
      <div class="card-icon">📄</div>
      <div class="card-content">
        <div class="code">${m.code}</div>
        <div class="title">${m.title}</div>
        <div class="vibe-tag">Boost Your Grades! ✨</div>
      </div>
      <div class="view-count">
        <span class="icon">👁️</span>
        <span class="count">${m.count || 0}</span>
      </div>
    `;
    card.onclick = () => window.location.href = `https://drive.google.com/uc?id=${m.driveId}`;
    card.style.animationDelay = `${index * 0.1}s`;
    grid.appendChild(card);
  });

  if (filtered.length === 0 && filter.trim() !== "") {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.innerHTML = `<p>No concept maps found. Try a different search! 😊</p>`;
    grid.appendChild(noResults);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById("map-search");
  if (searchInput) {
    searchInput.addEventListener("input", e => renderMaps(e.target.value));
    setTimeout(() => renderMaps(), 100);
  }
});