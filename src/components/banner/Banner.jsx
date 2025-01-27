import PropTypes from "prop-types";
import {
  bannerVariants,
  bannerTypes,
  bannerSizeClasses,
  bannerTypeClasses,
  bannerContent,
} from "../../data/bannerData";
import classNames from "classnames";

const Banner = ({ variant = "single", type = "neutral" }) => {
  // getting access to variant and color
  const sizeClasses = bannerSizeClasses[variant];
  const typeClasses = bannerTypeClasses[type];
  const content = bannerContent[type][variant];

  return (
    <div className={classNames(sizeClasses.container, typeClasses.bg)}>
      <span className={`${typeClasses.text} mr-2`}>{typeClasses.icon}</span>
      <span className={classNames(sizeClasses.title, typeClasses.text)}>
        {content.title}
      </span>
      {variant === "multi" && content.description && (
        <p
          className={classNames(
            sizeClasses.description,
            typeClasses.text,
            "mt-3"
          )}
        >
          {content.description}
        </p>
      )}
    </div>
  );
};

Banner.propTypes = {
  variant: PropTypes.oneOf(bannerVariants),
  type: PropTypes.oneOf(bannerTypes),
};

export default Banner;
