import React from 'react';
import styled from 'styled-components';
import { newArrivals } from '../utils/constants';
import { Link } from 'react-router-dom';

const NewArrivalsProducts = () => {
  return (
    <Wrapper className="section">
      <div className="wrapper">
        <article className="title">
          <h3>New Arrivals</h3>
          <p>
            We’ve designed and curated pieces that are a cut above your average
            home goods, because when you level up your everyday objects, you
            elevate your daily rituals.
          </p>
          <Link to="/products">
            <h5>VIEW ALL</h5>
          </Link>
          <div className="underline-view"></div>
        </article>
        <article className="img-container">
          {newArrivals.map((item) => {
            return (
              <div className="img-box" key={item.id}>
                <img src={item.img} alt={item.name} />
                <div className="line">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #fffcf9;
  min-height: 50vh;
  .wrapper {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
    height: 70vh;
    /* overflow: hidden; */
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  h5 {
    cursor: pointer;
  }
  h5:hover {
    color: var(--clr-grey-5);
  }
  .underline-view {
    width: 5rem;
    height: 1.5px;
    margin-top: -0.2rem;
    background: #49a6e9;
    background: var(--clr-grey-1);
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    width: 500px;
    padding: 32px;
  }
  .img-container {
    display: flex;
    flex-direction: row;
    width: 800px;
    height: auto;
    flex-wrap: no-wrap;
    overflow-x: scroll;
    .img-box {
      margin-right: 32px;
      display: block;
      flex: 0 0 auto;
      cursor: pointer;
      img:hover {
        opacity: 0.8;
      }
    }
  }
  .img-container::-webkit-scrollbar {
    display: none;
  }
  .line {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default NewArrivalsProducts;
