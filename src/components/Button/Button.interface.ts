import { color, size } from "../../types";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Color of Button ['primary', 'secondary', 'success', 'warning' 'danger']
   */
  color?: color;
  /**
   * Size of Button: 'sm', 'md' 'lg'
   */
  size?: size
}

export default ButtonType