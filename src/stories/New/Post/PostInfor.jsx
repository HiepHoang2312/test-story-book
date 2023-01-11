import PropTypes from "prop-types";

import "./postinfor.css";

export const PostInfor = ({ category, label_category, label_share }) => {
  return (
    <div className="post-info">
      <div className="post-info-category">
        <span className="type-eyebrow">{label_category}</span>
        <a href="#" className="post-info-category-link">
          {category}
        </a>
      </div>
      <div className="post-info-share">
        <span className="type-eyebrow">{label_share}</span>
        <ul className="post-info-share-list">
          <li>
            <a href="#">
              <span className="accessibly-hidden">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="accessibly-hidden">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="accessibly-hidden">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

PostInfor.propTypes = {
  /**
   * category: ""
   */
  category: PropTypes.string.isRequired,
  /**
   * label_category: ""
   */
  label_category: PropTypes.string.isRequired,
  /**
   * label_share: ""
   */
  label_share: PropTypes.string.isRequired,
};

PostInfor.defaultProps = {
  category: "research",
  label_category: "filed under",
  label_share: "share this post",
};
