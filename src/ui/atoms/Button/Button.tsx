import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.style";

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}: any) => {
  return (
    <StyledButton
      primary={primary}
      backgroundColor={backgroundColor}
      size={size}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
