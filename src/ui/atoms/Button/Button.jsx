import React from "react";
import { styled, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import { StyledButton, DisabledButton } from "./Button.style";

const Button = ({
  title,
  color,
  onClick,
  variant,
  backgroundColor,
  style,
  disabled = false,
  loading = false,
  buttonFontSize,
  fontWeight,
  letterSpacing,
}) => {
  return (
    <>
      {disabled ? (
        <DisabledButton onClick={onClick} style={{ ...style }}>
          <Typography
            style={{
              fontSize: buttonFontSize ?? "16px",
              fontWeight: fontWeight,
            }}
          >
            {title}
          </Typography>
        </DisabledButton>
      ) : (
        <StyledButton
          loading={loading}
          disabled={disabled}
          variant={variant}
          onClick={onClick}
          backgroundColor={backgroundColor}
          color={color}
          style={{ ...style }}
        >
          <Typography
            style={{
              fontSize: buttonFontSize ?? "16px",
              fontWeight: fontWeight || "normal",
              letterSpacing: letterSpacing || "normal",
            }}
          >
            {" "}
            {loading ? <CircularProgress size={20} /> : title}
          </Typography>
        </StyledButton>
      )}
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  variant: PropTypes.oneOf(["contained", "outlined"]),
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  loading: PropTypes.bool,
};

export default Button;
