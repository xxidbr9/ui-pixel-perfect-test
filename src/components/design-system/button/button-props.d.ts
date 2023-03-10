import React from "react"

type ButtonTypeSize = "small" | "medium" | "big"
type ButtonVariant = "primary" | "secondary"
export type ButtonProps = JSX.IntrinsicElements['button'] & {
  size?: ButtonTypeSize
  variant?: ButtonVariant
  children?: React.ReactNode
  prefixIcon?: FC<SVGProps<SVGSVGElement>>
  isIcon?: boolean
  full?: boolean
  rounded?: boolean
  bold?: boolean
}