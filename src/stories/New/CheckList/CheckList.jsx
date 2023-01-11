import PropTypes from "prop-types";

import "./checklist.css";

export const CheckList = ({ title, checkmark, fontsize }) => {
  return (
    <div class="checklist-wrapper">
      <div class="checklist">
        <span class="checklist-title ">{title}</span>

        <ul
          className={`fontsize--${fontsize} checkmark--${checkmark} $size--{fontsize}`}
        >
          <li>Launch a new product</li>
          <li>Transform an existing product</li>
          <li>Maintain and improve business systems</li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
            dui posuere
          </li>
        </ul>
      </div>
    </div>
  );
};

CheckList.propTypes = {
  /**
   * title:""
   */
  title: PropTypes.string.isRequired,
  /**
   * How style should the checkmark be?
   */
  checkmark: PropTypes.oneOf(["none", "default", "alt"]),
  /**
   * fontsize?
   */
  fontsize: PropTypes.oneOf(["large", "default"]),
};

CheckList.defaultProps = {
  title: "how we can help",
  checkmark: "default",
  fontsize: "default",
};
