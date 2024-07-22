import "./hero.scss";
import PropTypes from 'prop-types';

const Hero = ({ title, text, image, reverse }) => {
  Hero.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
  };
  return (
    <section className="hero__wrapper">
      {reverse ? (
        <div className="hero__container">
          <div className="content">
            <div className="heading">
              <h1>{title} </h1>
            </div>
            <p>{text}</p>
          </div>

          <div className="image">
            <img src={image} alt="Principal Image" />
          </div>
        </div>
      ) : (
        <div className="hero__container">
          <div className="image">
            <img src={image} alt="Principal Image" />
          </div>
          <div className="content">
            <div className="heading">
              <h1>{title} </h1>
            </div>
            <p>{text}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
