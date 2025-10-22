// faculty.js
const facultyMembers = [
  { name: 'Dr. J. Mohanan-HOD', phone: '+91-9876543210', course: 'Java Programming', rating: 4.8 },
  { name: 'Dr. Vijayakumar P', phone: '+91-9876543211', course: 'Data Structures', rating: 4.5 },
  { name: 'S. Premkumar', phone: '+91-9876543212', course: 'Operating Systems', rating: 4.9 },
  { name: 'Prof. Jane Smith', phone: '+91-9876543213', course: 'Computer Networks', rating: 4.7 },
  { name: 'Dr. Alice Johnson', phone: '+91-9876543214', course: 'Python Programming', rating: 4.6 }
];

function renderFaculty(filter = "") {
  const grid = document.getElementById("facultyGrid");
  grid.innerHTML = "";

  let filtered = facultyMembers.filter(f => f.name.toLowerCase().includes(filter.toLowerCase()) || f.course.toLowerCase().includes(filter.toLowerCase()));

  if (filter.trim() === "") {
    filtered = filtered.slice(0, 3);
    if (filtered.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "no-results";
      noResults.innerHTML = `<p>Search above to find faculty contacts! 🔍</p>`;
      grid.appendChild(noResults);
      return;
    }
  }

  filtered.forEach((f, index) => {
    const card = document.createElement("div");
    card.className = "card faculty-card";
    const stars = '⭐'.repeat(Math.floor(f.rating));
    card.innerHTML = `
      <div class="card-icon">👨‍🏫</div>
      <div class="card-content">
        <div class="name">${f.name}</div>
        <div class="course">${f.course}</div>
        <div class="phone">📞 ${f.phone}</div>
        <div class="rating">
          <span class="stars">${stars}</span>
          <span>(${f.rating}/5)</span>
        </div>
      </div>
    `;
    card.onclick = () => window.location.href = `tel:${f.phone}`;
    card.style.animationDelay = `${index * 0.1}s`;
    grid.appendChild(card);
  });

  if (filtered.length === 0 && filter.trim() !== "") {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.innerHTML = `<p>No faculty found. Try a different search! 😊</p>`;
    grid.appendChild(noResults);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById("faculty-search");
  if (searchInput) {
    searchInput.addEventListener("input", e => renderFaculty(e.target.value));
    setTimeout(() => renderFaculty(), 200);
  }
});