import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Good for people</h2>
            <div className="underline"></div>
          </div>
          <p>
            At Hazy, we’re in the business of home—and the planet is everyone’s
            home. We’re focused on expanding our use of low-impact materials,
            reducing waste and prioritizing circularity. We believe in great
            design, from around the corner to around the globe. That means
            supporting the people behind your products with ethical production,
            worker well-being and economic impact. We collaborate with artisan
            collectives around the world to help preserve their handcraft
            traditions and create opportunities for sustainable employment,
            especially in rural areas.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
