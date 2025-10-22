// announcements.js
const announcements = [
  { title: 'Midterm Exam Schedule Released', date: 'Oct 20, 2025', content: 'The midterm exam schedule for all courses has been published. Check your student portal for details.' },
  { title: 'New Library Resources Available', date: 'Oct 18, 2025', content: 'Access the latest e-books and journals on Java and Algorithms in the library section.' },
  { title: 'Workshop on Python Programming', date: 'Oct 15, 2025', content: 'Join the upcoming workshop on advanced Python topics this Friday. Registration open now!' },
  { title: 'Attendance Policy Reminder', date: 'Oct 10, 2025', content: 'Ensure your attendance is above 80% to avoid any penalties. Use the calculator tool to track.' }
];

function renderAnnouncements() {
  const grid = document.getElementById("announcementGrid");
  grid.innerHTML = "";

  announcements.slice(0, 3).forEach((ann, index) => {
    const card = document.createElement("div");
    card.className = "card announcement-card";
    card.innerHTML = `
      <div class="card-icon">📰</div>
      <div class="card-content">
        <div class="date">${ann.date}</div>
        <div class="title">${ann.title}</div>
        <div class="content">${ann.content}</div>
      </div>
    `;
    card.style.animationDelay = `${index * 0.1}s`;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderAnnouncements();
});