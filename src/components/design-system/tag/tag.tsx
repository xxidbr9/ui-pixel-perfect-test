import React from 'react'
import Typography from '../typography'
import { TagProps } from './tag-props'
import styles from './tag.module.css';


const Tag = ({ suffixIcon, children, ...props }: TagProps) => {
  const SuffixComp = suffixIcon as React.ElementType
  return (
    <div className={styles['tag']} {...props}>
      <Typography.Text variant='10-sb' className={styles['text']}>
        {children}
      </Typography.Text>
      {!!suffixIcon && <SuffixComp />}
    </div>
  )
}

export default Tag