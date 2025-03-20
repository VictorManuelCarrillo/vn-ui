export interface ButtonProps {
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  outlined?: boolean;
  ghost?: boolean;
  filled?: boolean; // opcional si quieres explicitarlo
  disabled?: boolean;
  text?: boolean;
  type?: "button" | "submit" | "reset";
}
