import Typography from "../typography/typography";
import { ButtonProps } from "./button-props";
import clsx from "clsx";
import styles from './button.module.css';

const Button = ({
  full,
  bold = true,
  disabled = false,
  children,
  size = "medium",
  prefixIcon,
  isIcon = false,
  variant = "primary",
  rounded = false,
  ...props }: ButtonProps) => {
  const btnOrIcon = isIcon ? "icon" : "btn"

  const buttonClass = clsx([
    styles[`${btnOrIcon}`],
    styles[`${btnOrIcon}-${size}`],
    (disabled ? styles[`${variant}-disabled`] : styles[variant]),
    (!bold ? styles[`${variant}-not-bold`] : ""),
    { 'w-full': full },
    { [styles['rounded']]: rounded }
  ])

  const PrefixIcon = prefixIcon as React.ElementType


  return (
    <button {...props} className={buttonClass}>
      {variant === "primary" && <div className={styles['primary-overlay']} />}
      {!!prefixIcon && <PrefixIcon />}
      {children && size === "big" && <Typography.Text variant={bold ? "13-b" : "13"}>{children}</Typography.Text>}
      {children && size === "medium" && <Typography.Text variant={bold ? "11-sb" : "11"}>{children}</Typography.Text>}
      {children && size === "small" && <Typography.Text variant={bold ? "10-sb" : "10"}>{children}</Typography.Text>}
    </button>
  )

};

export default Button;