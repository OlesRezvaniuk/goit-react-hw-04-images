import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
// import * as basicLightbox from 'basiclightbox';
import { Modal } from './Modal/Modal';

import axios from 'axios';

export class SearchPicture extends Component {
  state = {
    array: [],
    page: 1,
    word: '',
    isLoading: false,
    isModalOpen: false,
  };

  async onArrayItems() {
    const data = await this.getPicture();
    this.setState({
      array: data.hits,
    });
  }

  async getPicture() {
    this.setState({ isLoading: true });
    const { data } = await axios.get(
      `https://pixabay.com/api/?q=${this.state.word}&page=1&key=30029348-12068a2fdca19007a6804d89e&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`
    );
    this.setState({ isLoading: false });
    return data;
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.onArrayItems();
      console.log('update');
    }
  }

  onChangePageIncrement = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleModalOpen = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen )}


  onChangePageDecrement = () => {
    if (this.state.page > 1) {
      this.setState(prevState => ({
        page: prevState.page - 1,
      }));
      // this.onArrayItems();
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
    const { array } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <form
          onSubmit={this.handleButtonSearch}
          style={{
            display: 'block',
            textAlign: 'center',
            height: '50px',
            padding: '10px',
            backgroundColor: 'rgb(20 38 66)',
          }}
        >
          <div
            style={{
              height: '100%',
              position: 'relative',
              width: '400px',
              margin: '0px auto',
            }}
          >
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.word}
              onChange={this.onInputChange}
              style={{
                position: 'relative',
                border: 'none',
                borderRadius: '4px',
                height: '100%',
                width: '400px',
                paddingLeft: '40px',
                cursor: 'pointer',
                boxShadow: 'inset 0px 0px 5px',
              }}
            />
            <button
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                position: 'absolute',
                left: '0px',
                top: '50%',
                transform: 'translateY(-50%)',
                height: '100%',
                cursor: 'pointer',
              }}
              type="submit"
            >
              <img
                style={{ height: '20px', display: 'flex' }}
                src="https://cdn-icons-png.flaticon.com/512/2866/2866321.png"
                alt="search-button"
              />
            </button>
          </div>
        </form>

        <div
          style={{
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: '15px',
            margin: '15px',
            display: 'grid',
          }}
          className="gallery"
        >
          {array.map(item => (
            <div
              style={{ boxShadow: '0px 0px 4px' }}
              key={item.id}
              className="gallery__item"
            >
              <a
                // onClick={}
                style={{ display: 'flex', height: '100%' }}
                className="gallery__link"
                href={item.largeImageURL}
              >
                <img
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="gallery__image"
                  src={item.webformatURL}
                  alt={item.tags}
                />
              </a>
            </div>
          ))}
        </div>
        {this.state.array.length > 0 && (
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: 'rgb(20 38 66)',
              padding: '5px',
              borderRadius: '4px',
            }}
          >
            <button
              style={{ display: 'block', marginLeft: 'auto' }}
              type="button"
              onClick={this.onChangePageDecrement}
            >
              prev
            </button>
            <span style={{ margin: '0px 10px' }}>{this.state.page}</span>
            <button
              style={{ display: 'block', marginRight: 'auto' }}
              type="button"
              onClick={this.onChangePageIncrement}
            >
              next
            </button>
          </div>
        )}
        {this.state.isLoading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ display: 'block' }}
            wrapperClassName=""
            visible={true}
          />
        )}
        <Modal />
      </div>
    );
  }
}
