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
  const [error, setError] = useState('error');
  const [totalHits, setTotalHits] = useState();

  const ApiPicture = async () => {
    const { data } = await axios.get(
      `${BASE_URL}?q=${word}&page=1&key=30029348-12068a2fdca19007a6804d89e&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
    );
    return data;
  };

  const onArrayItems = async () => {
    setIsLoading(true);
    try {
      const imgArray = await ApiPicture();
      setTotalHits(imgArray.totalHits);
      if (page === 1) {
        setImages(imgArray.hits);
      } else if (page > 1 && page < totalHits / 12) {
        setImages(state => [...state, ...imgArray.hits]);
      }
    } catch {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (page >= 1) {
      onArrayItems();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyModalClose);
    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
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

  const handleModalOpen = e => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
    setModalImg(e.currentTarget.href);
  };

  const onInputChange = e => {
    setWord(e.currentTarget.value);
  };

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
      {page > 0 && page < totalHits / 12 && (
        <Button
          onPage={page}
          onSetPage={setPage}
          onTotalHits={totalHits}
          onSetTotalHits={setTotalHits}
        />
      )}
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
