import { galleryItems } from './gallery-items.js';
// Change code below this line

// // Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// // Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// // Реализация делегирования на div.gallery и получение url большого изображения.
// // Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr
// и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// // Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// // Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку
// модального окна с изображением из примеров библиотеки basicLightbox.
// // Разметка элемента галереи
// // Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>,
// // и указываться в href ссылки.Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */

//     Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию
// пользователь будет перенаправлен на другую страницу.Запрети это поведение по умолчанию.

console.log(galleryItems);
const divEl = document.querySelector('.gallery');

const markup = galleryItems
	.map(
		objekt =>
			`<div class="gallery__item">
  <a class="gallery__link" href="${objekt.original}">
    <img
      class="gallery__image"
      src="${objekt.preview}"
      data-source="${objekt.original}"
      alt="Image description"
    />
  </a>
</div>`,
	)
	.join('');

divEl.insertAdjacentHTML('afterbegin', markup);

const galleryImg = document.querySelectorAll('.gallery__image');

const clickImege = event => {
	if (event.target.nodeName !== 'IMG') {
		return;
	} else {
		event.preventDefault();
		const instance = basicLightbox.create(`
		    <img src="${event.target.getAttribute(
					'data-source',
				)}" width="800" height="600">
		`);

		instance.show();
		const closeModal = event => {
			if (event.key === 'Escape') {
				instance.close();
			}
		};

		document.addEventListener('keydown', closeModal);
	}
};

divEl.addEventListener('click', clickImege);
