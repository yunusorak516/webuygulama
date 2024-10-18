const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

// Navbar bağlantılarına tıklama etkinliği
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbarLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Randevu formunu işleme
document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const hospital = document.getElementById('hospital').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const appointmentList = document.getElementById('appointment-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${hospital}</td>
        <td>${doctor}</td>
        <td>${date}</td>
        <td>${time}</td>
    `;
    appointmentList.appendChild(row);

    // Tabloyu görünür hale getir
    document.getElementById('appointment-table').style.display = 'table';

    // Formu sıfırlama
    this.reset();
});
