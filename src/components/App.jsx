import { Component } from 'react';
import * as API from '../services/Api';
import Searchdar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import { AppWrp } from './App.styled';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    searchName: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    totalPages: 0,
  };

  // життєвий цикл, викликається при оновленні компонента
  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  }

  // завантаження додаткових зображень
  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  // обробкa форми пошуку
  handleSubmit = query => {
    this.setState({
      searchName: query,
      images: [],
      currentPage: 1,
      searchQuery: '',
    });
  };

  // додавання зображень у стан
  addImages = async () => {
    const { searchName, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });

      // отримання даних API запроса з Pixabay
      const data = await API.getImages(searchName, currentPage);

      if (data.hits.length === 0) {
        return toast.info('Sorry image not found...', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      // нормалізaція отриманих зображень
      const normalizedImages = API.normalizedImages(data.hits);

      this.setState(state => ({
        images: [...state.images, ...normalizedImages],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, currentPage, totalPages } = this.state;

    return (
      <AppWrp>
        <ToastContainer transition={Slide} />
        <Searchdar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore} />
        )}
      </AppWrp>
    );
  }
}

export default App;
