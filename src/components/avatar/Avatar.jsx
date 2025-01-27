import PropTypes from "prop-types";
import classNames from "classnames";
import { IoPersonSharp } from "react-icons/io5";
import { AVATAR_SIZES, AVATAR_COLORS } from "./avatarConfig";

const Avatar = ({
  children,
  src,
  alt,
  variant,
  className,
  color,
  size,
  ...rest
}) => {
  // base class applied to all Avatars
  const baseClasses =
    "rounded-full overflow-hidden flex items-center justify-center ";
  const sizeClass = AVATAR_SIZES[size];
  const colorClass = AVATAR_COLORS[color];

  // look up table or variant Object lookup table that maps each varients to its specific JSX Content
  // A look up table is much better than a switch statement or if/else statements
  const variantContent = {
    photo: <img src={src} alt={alt} />,
    letters: (
      <span
        className={classNames("font-bold text-white ", {
          "text-xs": size === "xsmall",
          "text-sm": size === "small",
          "text-base": size === "medium",
          "text-lg": size === "large",
          "text-xl": size === "xlarge",
        })}
      >
        {children}
      </span>
    ),
    anonymous: (
      <IoPersonSharp
        className='text-white transform translate-y-1/3'
        size={
          size === "xsmall"
            ? 26 // base size
            : size === "small"
            ? 35 // ~1.35x
            : size === "medium"
            ? 47 // ~1.34x
            : size === "large"
            ? 63 // ~1.34x
            : size === "xlarge"
            ? 84 // ~1.33x
            : 47 // default to medium
        }
      />
    ),
  };

  return (
    <div
      className={classNames(
        baseClasses,
        sizeClass,
        colorClass,
        variant !== "photo" && colorClass,
        className
      )}
      {...rest}
    >
      {variantContent[variant]}
    </div>
  );
};

Avatar.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  variant: PropTypes.oneOf(["photo", "letters", "anonymous"]),
  className: PropTypes.string,
  color: PropTypes.oneOf(["navy", "pink", "red", "blue", "green"]),
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
};

export default Avatar;
