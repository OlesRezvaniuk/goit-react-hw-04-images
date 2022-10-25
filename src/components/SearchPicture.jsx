import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export class SearchPicture extends Component {
  state = {
    array: [],
    page: 1,
    word: '',
    search: '',
    isLoading: false,
    isModalOpen: false,
    modalImg: '',
    error: null,
  };

  async ApiPicture() {
    const { word, page } = this.state;
    const { data } = await axios.get(
      `${BASE_URL}?q=${word}&page=1&key=30029348-12068a2fdca19007a6804d89e&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
    );
    return data;
  }

  async onArrayItems() {
    this.setState({ isLoading: true });
    try {
      const dataA = await this.ApiPicture();
      this.setState({
        array: dataA.hits,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { page, isModalOpen } = this.state;
    if (prevState.page !== page) {
      this.onArrayItems();
    }
    if (isModalOpen)
      window.addEventListener('keydown', this.handleKeyModalClose);
  }

  handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      this.setState({ isModalOpen: false });
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyModalClose);
  }

  onChangePageIncrement = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    return;
  };

  handleModalOpen = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
    this.setState({ modalImgSrs: e.currentTarget.href });
  };

  onChangePageDecrement = () => {
    const { page } = this.state;
    if (page > 1) {
      this.setState(prevState => ({
        page: prevState.page - 1,
      }));
    }
  };

  onInputChange = e => {
    this.setState({ word: e.currentTarget.value });
  };

  handleButtonSearch = e => {
    e.preventDefault();
    this.onArrayItems();
    this.setState({ page: 1 });
  };

  render() {
    const { array, word, page, isLoading, isModalOpen, modalImgSrs } =
      this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <Searchbar
          onSearch={this.handleButtonSearch}
          onWord={word}
          onInputChange={this.onInputChange}
        />
        <ImageGallery
          onArray={array}
          onHandleModalOpen={this.handleModalOpen}
        />
        {array.length > 0 && (
          <Button
            onPage={page}
            onPageI={this.onChangePageIncrement}
            onPageD={this.onChangePageDecrement}
          />
        )}
        {isLoading && <Loader />}
        {isModalOpen && (
          <Modal
            onBdClick={this.handleBackdropClose}
            onLargeImg={modalImgSrs}
            onWord={word}
          />
        )}
      </div>
    );
  }
}
