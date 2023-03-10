import { HeadingProps } from '../typography-props'
import styles from '../typography.module.css';
// Heading
const Heading = ({ variant = "h1", children, ...props }: HeadingProps) => {
  const Comp = variant as React.ElementType;
  const style: Record<typeof variant, string> = {
    h1: styles['text-h-1'],
    h2: styles['text-h-2'],
    h3: styles['text-h-3'],
    h4: styles['text-h-4'],
    h5: styles['text-h-5'],
    h6: styles['text-h-6']
  }

  return <Comp {...props} className={style[variant]}>{children}</Comp>
}

export default Heading