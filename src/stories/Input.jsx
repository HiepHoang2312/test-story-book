import "./input.css";
import PropTypes from "prop-types";
export const Input = ({
  type,
  placeholder,
  backgroundColor,
  size,
  ...props
}) => {
  return (
    <>
      <input
        type={"type"}
        placeholder={placeholder}
        className={["storybook-input", `storybook-input--${size}`].join(" ")}
        style={backgroundColor && { backgroundColor }}
        {...props}
      ></input>
    </>
  );
};

Input.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * placeholder:""
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * type:""
   */
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  backgroundColor: null,
  size: "medium",
  placeholder: "",
  type: "text",
};
