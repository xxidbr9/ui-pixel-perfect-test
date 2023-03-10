import { FC, ReactNode } from "react"

export type InputProps = JSX.IntrinsicElements['input'] & {
  prefixComponent?: FC,
  suffixComponent?: FC,
  children?: ReactNode
  full?: boolean
}