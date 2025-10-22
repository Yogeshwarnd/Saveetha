// contributors.js
const contributors = [
  { name: 'John Doe', photo: 'https://via.placeholder.com/60?text=JD', insta: '@johndoe', about: 'Uploaded Java Concept Maps and Python Tutorials. Thanks for your contribution!' },
  { name: 'Jane Smith', photo: 'https://via.placeholder.com/60?text=JS', insta: '@janesmith', about: 'Shared Database Management Systems resources. Grateful for your efforts!' },
  { name: 'Mike Johnson', photo: 'https://via.placeholder.com/60?text=MJ', insta: '@mikejohnson', about: 'Contributed Operating Systems assignments. Appreciate your dedication!' },
  { name: 'Sarah Wilson', photo: 'https://via.placeholder.com/60?text=SW', insta: '@sarahwilson', about: 'Added Biology and Environmental Science concept maps. Thank you!' }
];

function renderContributors() {
  const grid = document.getElementById("contributorGrid");
  grid.innerHTML = "";

  contributors.slice(0, 3).forEach((contrib, index) => {
    const card = document.createElement("div");
    card.className = "card contributor-card";
    card.innerHTML = `
      <div class="card-icon">🙏</div>
      <div class="card-content">
        <img src="${contrib.photo}" alt="${contrib.name}" class="photo">
        <div class="name">${contrib.name}</div>
        <a href="https://instagram.com/${contrib.insta.replace('@', '')}" target="_blank" class="insta">${contrib.insta}</a>
        <div class="about">${contrib.about}</div>
      </div>
    `;
    card.style.animationDelay = `${index * 0.1}s`;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderContributors();
});