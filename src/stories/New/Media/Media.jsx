import PropTypes from "prop-types";

import "./media.css";

export const MediaOnly = ({ type, image, video }) => {
  return (
    <div className="media">
      {type ? (
        <img className="image-only-image" alt="des" src={`${image}`} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: video }} />
      )}
    </div>
  );
};

MediaOnly.propTypes = {
  /**
   * type
   */
  type: PropTypes.bool,
  /**
   * image: ""
   */
  image: PropTypes.string.isRequired,
  /**
   * video: ""
   */
  video: PropTypes.string.isRequired,
};

MediaOnly.defaultProps = {
  type: true,
  image:
    "https://www.thinkcompany.com/wp-content/uploads/2021/01/careers-header.jpg",
  video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/StKrqfrOkWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
};
