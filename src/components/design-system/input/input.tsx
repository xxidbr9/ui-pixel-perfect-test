import clsx from 'clsx';
import { InputProps } from './input-props'
import styles from './input.module.css';

// mock input
const Input = ({ full, suffixComponent, prefixComponent, className, ...props }: InputProps) => {
  const PrefixComponent = prefixComponent as React.ElementType
  const SuffixComp = suffixComponent as React.ElementType

  const wrapperClassNames = clsx([
    styles['input-wrapper'],
    className,
    { [styles['w-full']]: full }
  ])

  return (
    <div className={wrapperClassNames}>
      <div className={styles['prefix-component']}>
        {!!prefixComponent && <PrefixComponent />}
        <div className={styles['input']} {...props} />
      </div>
      <div className={styles['suffix-component']}>
        {!!suffixComponent && <SuffixComp />}
      </div>
    </div>
  )
}

export default Input