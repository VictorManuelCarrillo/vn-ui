export interface ButtonProps {
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  disabled?: boolean;
  outlined?: boolean;
  ghost?: boolean;
  filled?: boolean; // opcional si quieres explicitarlo
  text?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  shape?: "normal" | "rounded" | "pill";
}
