
import axios from "axios";

//  базовий URL для всiх запросiв i API-ключ
axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "35494090-97ab8058fb36878c1cc8e684f";
export const PER_PAGE = 12;

// отримуємо зображення API Pixabay
export const getImages = async (query, page) => {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`
  );
  return response.data;
};

// нормалізація масиву
export const normalizedImages = imagesArray =>
  imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
