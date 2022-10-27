// import { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export const SearchPicture = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(null);
  const [word, setWord] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(false);
  const [error, setError] = useState(null);

  const ApiPicture = async () => {
    const { data } = await axios.get(
      `${BASE_URL}?q=${word}&page=1&key=30029348-12068a2fdca19007a6804d89e&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
    );
    return data;
  };

  const onArrayItems = async () => {
    setIsLoading(true);
    try {
      const dataA = await ApiPicture();
      setImages(dataA.hits);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (page >= 1) {
      onArrayItems();
    }
  }, [page]);

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyModalClose);
    }
  }, [isModalOpen]);

  useEffect(() => {
    window.removeEventListener('keydown', handleKeyModalClose);
  }, []);

  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const onShowMore = () => {
    if (page < 43) {
      setPage(page + 1);
    }
    setImages(state => [...state, ...images]);
  };

  const handleModalOpen = e => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
    setModalImg(e.currentTarget.href);
  };

  const onInputChange = e => {
    setWord(e.currentTarget.value);
  };
  console.log(images);

  const handleButtonSearch = e => {
    e.preventDefault();
    onArrayItems();
    setPage(1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Searchbar
        onSearch={handleButtonSearch}
        onWord={word}
        onInputChange={onInputChange}
      />
      <ImageGallery onArray={images} onHandleModalOpen={handleModalOpen} />
      {images.length > 0 && <Button onPage={page} onShowMore={onShowMore} />}
      {isLoading && <Loader />}
      {isModalOpen && (
        <Modal
          onBdClick={handleBackdropClose}
          onLargeImg={modalImg}
          onWord={word}
        />
      )}
    </div>
  );
};
