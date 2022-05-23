import styled, { css } from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  bottom: 0;

  img {
    margin-left: 10px;
    margin-right: 20px;
    width: 30px;
  };

  #music-name{
    font-size: 0.9rem;
    margin-left: 60px;
    width: 200px;
  };

  button {
    border: none;
    background: transparent;
  };

  button:hover {
    cursor: pointer;
  };

  .favorite {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
  };

  #not-favorite svg{
  font-size: 2rem;
  color: white;
  opacity: 1;
  transition: all 0.3s
  };

  #favorite svg {
    font-size: 2rem;
    color: white;
    opacity: 0;
    transition: all 0.3s
  };

  #play {
    position: absolute;
    opacity: 1;
    transition: all 0.3s
  };

  #pause {
    position: absolute;
    opacity: 0;
    transition: all 0.3s
  };

  #duration {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 10px;
  };

  ${({ isPlaying }) => isPlaying && css`
    #play {
      opacity: 0;
      transform: rotate(360deg)
    }

    #pause {
      opacity: 1;
      transform: rotate(360deg)
    }
  `};

  ${({ isFavorite }) => isFavorite && css`
    #favorite svg {
      opacity: 1;
      transform: scale(1.1);
    }

    #not-favorite svg{
      opacity: 0;
    }
  `};
`;

const ContainerPlayerAndAlbum = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-basis: 350px;
  height: 150px;
  background: rgba(92, 41, 147, 0.38);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  transition: all 0.5s;
  margin: 10px;

  #image-album {
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    margin: 10px;
  }

  `;

const ContainerNameAndAlbumName = styled.div`
    h3, p {
    margin: 0;
    padding: 0;
    margin: 10px 0 0 10px;
  }
  `;
export { Container, ContainerPlayerAndAlbum, ContainerNameAndAlbumName };
