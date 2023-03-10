export type TypographyProps = {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

type TextAsType = "span" | "div" | "p"
type TextVariantType = "16-sb" | "16" | "16-text" | "13-b" | "13" | "11-sb" | "11" | "11-text" | "10-sb" | "10"
export type TextProps = TypographyProps & {
  as?: TextAsType
  variant?: TextVariantType
}

// Heading
type HeadingVariantType = "h1" | "h2" | "h3" | 'h4' | 'h5' | 'h6'
export type HeadingProps = TypographyProps & {
  variant?: HeadingVariantType
}