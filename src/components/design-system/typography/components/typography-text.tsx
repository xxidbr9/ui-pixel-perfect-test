import clsx from 'clsx';
import { TextProps } from '../typography-props'
import styles from '../typography.module.css';

const Text = ({ as: ASComp = "p", variant = "11", children, className, ...props }: TextProps) => {
  const Comp = ASComp as React.ElementType;

  const style: Record<typeof variant, string> = {
    '16-sb': styles['text-16-px-sb'],
    '16': styles['text-16-px'],
    '16-text': styles['text-16-px-text'],
    '13-b': styles['text-13-px-b'],
    '13': styles['text-13-px'],
    '11-sb': styles['text-11-px-sb'],
    '11-text': styles['text-11-px-text'],
    '11': styles['text-11-px'],
    '10-sb': styles['text-10-px-sb'],
    '10': styles['text-10-px']
  }

  return (
    <Comp {...props} className={clsx([style[variant], className])}>
      {children}
    </Comp>
  )
};

export default Text;