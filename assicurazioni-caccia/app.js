// app.js

const COMPONENTS = {
  header: `
    <div class="container nav-container">
      <a href="index.html" class="logo">
        ASSICURAZIONI CACCIA & C. S.A.S.
      </a>
      <nav class="nav-links">
        <a href="index.html">Home</a>
        <a href="chi-siamo.html">Chi Siamo</a>
        <a href="servizi.html">Servizi</a>
        <a href="dove-siamo.html">Dove Siamo</a>
        <a href="preventivo.html" class="btn btn-primary" style="color: white;">Preventivo</a>
      </nav>
      <button class="mobile-menu-btn" aria-label="Menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  `,
  footer: `
    <div class="container">
      <div class="footer-grid fade-in">
        <div class="footer-col">
          <a href="index.html" class="logo" style="color: white; margin-bottom: 1.5rem;">
            ASSICURAZIONI CACCIA & C. S.A.S.
          </a>
          <p>Agenzia convenzionata UnipolSai Assicurazioni. Da oltre 80 anni proteggiamo il futuro delle famiglie e delle imprese sul territorio varesotto.</p>
          <div class="footer-logos" style="margin-top: 1.5rem;">
            <div style="background: rgba(255,255,255,0.1); padding: 5px; border-radius: 4px; display: inline-block;">
               <strong style="color: #ffffff; font-family: sans-serif; font-size: 1.2rem;">UnipolSai</strong>
            </div>
          </div>
        </div>
        
        <div class="footer-col">
          <h4>Sede di Saronno</h4>
          <p>Via G. Mazzini 33, 21047 Saronno (VA)</p>
          <p>Tel: 02 9602494</p>
          <p>Email: <a href="mailto:info@assicurazionicaccia.it">info@assicurazionicaccia.it</a></p>
          <p style="margin-top: 1rem;"><strong>Orari:</strong><br>Lun-Gio: 9:30-12:30 / 14:30-18:30<br>Ven: 9:30-12:30 / 14:30-17:30</p>
        </div>

        <div class="footer-col">
          <h4>Sede di Busto Arsizio</h4>
          <p>Via Magenta 50, 21052 Busto Arsizio (VA)</p>
          <p>Tel: 0331 637180</p>
          <p>Email: <a href="mailto:busto@assicurazionicaccia.it">busto@assicurazionicaccia.it</a></p>
        </div>

        <div class="footer-col">
          <h4>Link Utili</h4>
          <a href="chi-siamo.html">La nostra storia</a>
          <a href="servizi.html">Tutti i servizi</a>
          <a href="preventivo.html">Richiedi un preventivo</a>
          <br>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <div class="footer-bottom fade-in">
        <p>&copy; ${new Date().getFullYear()} Assicurazioni Caccia & C. SAS. Tutti i diritti riservati.</p>
        <p>Iscrizione RUI Agenti: Luigi Caccia A000008276 - Carlo Caccia A000008280</p>
        <p>Soggetto a vigilanza IVASS</p>
      </div>
    </div>
  `,
  floatingWhatsApp: `
    <a href="https://wa.me/393475668105" target="_blank" class="floating-whatsapp" aria-label="Contattaci su WhatsApp">
      <svg viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.418-.099.824z"/>
      </svg>
    </a>
  `
};

document.addEventListener('DOMContentLoaded', () => {
  // Inject Graphic Background Effects (Blobs)
  const blobs = document.createElement('div');
  blobs.innerHTML = '<div class="bg-blob bg-blob-1"></div><div class="bg-blob bg-blob-2"></div>';
  document.body.prepend(blobs);

  // Inject Header
  const header = document.createElement('header');
  header.innerHTML = COMPONENTS.header;
  document.body.prepend(header);

  // Inject Footer
  const footer = document.createElement('footer');
  footer.innerHTML = COMPONENTS.footer;
  document.body.appendChild(footer);

  // Inject WhatsApp
  const wa = document.createElement('div');
  wa.innerHTML = COMPONENTS.floatingWhatsApp;
  document.body.appendChild(wa.firstElementChild);

  // Set Active Link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
  });

  // Sticky Header Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
  });
});
