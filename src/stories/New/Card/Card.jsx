import PropTypes from "prop-types";
import "./card.css";
export const Card = ({ heading, content, image, border }) => {
  return (
    <div className="warp">
      <div className="">
        <div className={`card border-${border}`}>
          <div className="card-image">
            <img alt="Card" src={image} />
          </div>
          <div className="">
            <h2 className="Heading">{heading}</h2>
            <p className="Content">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  /**
   * heading:""
   */
  image: PropTypes.string.isRequired,
  /**
   * How style should the border be?
   */
  border: PropTypes.oneOf(["none", "shadow", "flat"]),
  /**
   * heading:""
   */
  heading: PropTypes.string.isRequired,
  /**
   * content:""
   */
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  image:
    "https://www.thinkcompany.com/wp-content/uploads/2021/10/Be-kind-to-people.png",
  border: "shadow",
  heading: "Xin chào",
  content:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quae et sunt esse laborum dolorem delectus, veritatis quaerat quibusdam impedit illum? Provident maxime voluptatibus a accusamus blanditiis, voluptatum corrupti eligendi!",
};
