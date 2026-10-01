document.addEventListener('DOMContentLoaded', function () {

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navbarMenu = document.getElementById('navbarMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const btnKonfirmasi = document.getElementById('btn-konfirmasi-tanggal-lahir');
  const birthdateInput = document.getElementById('birthdate');

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function () {
      navbarMenu.classList.toggle('show');
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navbarMenu.classList.remove('show');

      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });

  window.addEventListener('scroll', function () {
    let currentSection = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });

  if (btnKonfirmasi) {
    btnKonfirmasi.addEventListener('click', function () {
      const birthdateValue = birthdateInput.value;

      if (!birthdateValue) {
        alert('Silakan pilih tanggal lahir terlebih dahulu!');
        return;
      }

      const birthDate = new Date(birthdateValue);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      let y = '';

      if (age < 0) {
        y = 'sakit lu, aneh lu';
      } else if (age >= 30) {
        y = 'tuek jir';
      } else if (age >= 20) {
        y = 'kepala dua nich';
      } else {
        y = 'anjay muda';
      }

      alert(`umurmu ${age} tahun bos, ${y}`);
    });
  }

});