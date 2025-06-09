// Lista de imagens (adicione novas seguindo o padrão)
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

const galeria = document.getElementById('galeria');

imagens.forEach(nome => {
  const img = document.createElement('img');
  img.src = `imagens/${nome}`;
  img.alt = `Momento de ${nome}`;
  galeria.appendChild(img);
});
