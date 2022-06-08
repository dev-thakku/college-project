import styled from 'styled-components';

export default function Banner() {
  return (
    <BannerWrapper>
      <div className="banner-image-wrapper">
        <img src="images/banner.jpg" alt="banner" />
      </div>
      <div className="title">
        <h1>Student Downloads</h1>
      </div>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  position: relative;

  .banner-image-wrapper {
    width: 100%;
    height: 250px;
    z-index: -1;

    @media (max-width: 820px) {
      height: 200px;
    }

    @media (max-width: 650px) {
      height: 170px;
    }

    @media (max-width: 370px) {
      height: 150px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0 0;
      background: rgba(0, 87, 150, 0.4);
    }
  }

  .title {
    position: absolute;
    top: 50%;
    left: 2rem;
    color: #fff;

    @media (max-width: 650px) {
      width: fit-content;
      padding-left: 1rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    h1 {
      font-family: 'Play', sans-serif;
      font-size: 55px;

      @media (max-width: 650px) {
        font-size: 45px;
      }

      @media (max-width: 370px) {
        font-size: 40px;
      }
    }
  }
`;
