import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ children, variant, className, size, ...rest }) => {
  const baseStyles =
    "px-3 py-2 text-lg font-semibold text-black bg-gray-100 rounded-lg hover:bg-gray-300";

  // Size classes mapping
  const sizeClasses = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-3 py-2",
    large: "text-lg px-4 py-3",
  };

  // Variant classes mapping
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-black",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  const buttonClasses = classnames(
    baseStyles,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]), // Add this line
  className: PropTypes.string,
};

export default Button;
