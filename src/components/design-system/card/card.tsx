import React from 'react'
import { CardProps } from './card-props'
import styles from './card.module.css';

const Card = ({ children, ...props }: CardProps) => {
  return (
    <div className={styles['card']} {...props}>{children}</div>
  )
}

export default Card