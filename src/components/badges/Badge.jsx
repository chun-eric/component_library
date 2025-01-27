import React from "react";
import {
  badgeVariants,
  badgeColors,
  badgeColorClasses,
  badgeVariantClasses,
  badgeBaseClass,
} from "../../data/badgeData";
import classNames from "classnames";

const Badge = ({ children, variant = "square", color = "gray" }) => {
  // getting access to variant and color
  const variantClass = badgeVariantClasses[variant];
  const colorClass = badgeColorClasses[color];

  return (
    <span
      className={classNames(
        badgeBaseClass,
        variantClass,
        colorClass.background,
        colorClass.text
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
