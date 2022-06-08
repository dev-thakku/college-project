import styled from 'styled-components';
import formater from '../../utils/formater';

export default function ResultCard({ name, subject, type, size, url }) {
  return (
    <Card className="card">
      <span className="close"></span>
      <span className="arrow"></span>
      <article>
        <h2>{name}</h2>
        <div className="title">
          {type === 'questions' ? subject.name : formater.formatType(type)}
        </div>
        <div className="pic">
          <img src="images/pdf-banner.png" alt={name + ' pdf'} />
        </div>

        <div className="desc">
          <p>{size ? `Size: ${size}` : `Type: ${formater.formatType(type)}`}</p>
        </div>
      </article>
      <div className="actions">
        <a href={url} className="btn" download>
          <span>Download</span>
          <img className="icon" src="images/download-icon.svg" />
        </a>
      </div>
    </Card>
  );
}

const Card = styled.div`
  height: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.1);
  width: 90%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: all 0.4s ease;
  margin: 0 10px;

  &:before {
    height: 190px;
    width: calc(100% + 100px);
    content: '';
    position: absolute;
    background-image: linear-gradient(to top, #af2d2c 0%, #dc4847 100%);
    border-radius: 4px 4px 100% 100%;
    transition: all 0.4s ease-out;
    top: 0;
  }

  article {
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h2 {
      color: white;
      margin: 0;
      padding: 40px 20px 10px 20px;
      font-weight: 500;
      font-size: 24px;
      letter-spacing: 0.5px;
    }

    .title {
      color: white;
      padding: 10px 20px;
      letter-spacing: 0.8px;
      transition: all 0.4s ease;
    }

    .desc {
      padding: 10px 30px;
      font-size: 14px;
      text-align: center;
      line-height: 24px;
      color: #666;
      height: 90px;
      transition: all 0.4s ease-out;
    }

    .pic {
      width: 120px;
      height: 120px;
      overflow: hidden;
      border-radius: 100%;
      margin: 20px 0;
      box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.3);
      transition: all 0.6s ease;

      img {
        width: 100%;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
    }
  }
  .actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: white;
    //bottom: 4px;
    z-index: 1;

    .btn {
      border: 0;
      background-color: transparent;
      box-sizing: border-box;
      width: 100%;
      height: 36px;
      margin: 0;
      text-transform: uppercase;
      font-size: 10px;
      transition: all 0.6s ease-in-out;
      cursor: pointer;
      color: #db4747;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-family: $font;
      letter-spacing: 0.5px;
      background: rgb(218 71 70 / 8%);

      span {
        z-index: 1;
        opacity: 1;
        transition: all 0.4s ease-in-out;
      }

      .icon {
        width: 10px;
        opacity: 0;
        position: absolute;
        transition: all 0.2s ease-in-out;
      }

      &:before {
        content: '';
        width: 100%;
        height: 0%;
        position: absolute;
        background: #db4747;
        transition: all 0.4s ease;
        bottom: 0;
        opacity: 0.2;
      }

      &:focus {
        outline: 0;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.5);

        span {
          opacity: 0;
          transition: all 0.3s ease-in-out;
        }

        .icon {
          width: 22px;
          opacity: 1;
          transition: all 0.4s ease-in-out;
        }

        &:nth-child(3) {
          .icon {
            width: 18px;
          }
        }
        &:before {
          height: 100%;
        }
      }

      &.clicked {
        span {
          display: none;
        }
        .icon {
          width: 22px;
          opacity: 1;
          animation: icon 0.5s ease forwards;

          @keyframes icon {
            0% {
              width: 22px;
            }
            50% {
              width: 40px;
            }
            100% {
              width: 22px;
            }
          }
        }
        &:before {
          opacity: 0.3;
          height: 100%;
        }
      }
    }
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.3);

    &:before {
      height: 100%;
      border-radius: 4px;
    }

    .desc {
      color: white;
    }

    .pic {
      box-shadow: 0px 0px 0px 8px rgba(255, 255, 255, 0.3);
      img {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
      }
    }
  }

  &.closed {
    min-width: 120px;
    max-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s ease;
    cursor: pointer;

    .title,
    .desc,
    .actions,
    .close {
      display: none;
    }

    h2 {
      padding: 0;
      height: 100%;
      transform: rotate(-90deg);
      width: 440px;
      z-index: 2;
      transition: all 0.6s ease;
    }

    .pic {
      border-radius: 100%;
      height: 400px;
      width: 400px;
      position: absolute;
      top: -20px;
      margin: 0;
      box-shadow: 0;
      transition: all 0.6s ease;

      img {
        object-fit: cover;
        height: 100%;
        transform: translateY(20px);
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.5;
        z-index: 1;
        transition: all 0.4s ease;
        transform: translateY(20px);
      }
    }

    &:before {
      height: 100%;
      border-radius: 4px;
    }
  }
`;
