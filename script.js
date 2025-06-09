// Lista de imagens com nomes reais
const imagens = [
  "2018-06.jpg",
  "2018-12.jpg",
  "2019-01.jpg",
  "2019-08.jpg",
  "2020-02.jpg",
  "2021-06.jpg",
  "2022-11.jpg",
  "2023-03.jpg",
  "2024-06.jpg"
];

// Animação das frases
const frases = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

frases.forEach(f => observer.observe(f));

// Carregar imagens da galeria a partir da lista
const galeria = document.getElementById('galeria');

imagens.forEach(nomeArquivo => {
  const img = document.createElement('img');
  img.src = `imagens/${nomeArquivo}`; // Corrigido: pasta 'imagens'
  img.alt = `Foto de ${nomeArquivo}`;
  galeria.appendChild(img);
});
