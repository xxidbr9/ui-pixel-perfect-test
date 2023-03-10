import clsx from 'clsx';
import { SelectProps } from './select-props'
import styles from './select.module.css';
import { DoneCheckIcon, SearchIcon, XCloseCancelIcon } from '@/assets/svg/icons';
import { Fragment } from 'react';
import Input from '../input/input';
import Typography from '../typography/typography';

// mock select
const Select = ({ full, open, suffixComponent, prefixComponent, ...props }: SelectProps) => {
  const PrefixComponent = prefixComponent as React.ElementType
  const SuffixComp = suffixComponent as React.ElementType

  const wrapperClassNames = clsx([
    styles['select-wrapper'],
    { [styles['w-full']]: full }
  ])

  return (
    <div className={wrapperClassNames}>
      <div className={styles['prefix-component']}>
        {!!prefixComponent && <PrefixComponent />}
        <div className={styles['select']} {...props} />
      </div>
      <div className={clsx([styles['suffix-component'], styles['dropdown-button']])}>
        {!!suffixComponent && (
          <Fragment>
            <SuffixComp />
            {open && (
              <Dropdown />
            )}
            <XCloseCancelIcon className={styles['close-suffix']} />
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Select


// Dropdown
type MenuProps = {
  selected?: boolean
  children?: React.ReactNode
}
const Menu = ({ children, selected }: MenuProps) => {
  return (
    <div className={styles['menu']}>
      <Typography.Text variant='11'>
        {children}
      </Typography.Text>
      {!!selected && <DoneCheckIcon className={styles['icon-check']} />}
    </div>
  )
}

const PrefixSearch = () => {
  return (
    <SearchIcon className={styles['dropdown-icon']} />
  )
}

const menus: MenuProps[] = [
  { children: "Tab 1", selected: true },
  { children: "Tab 2", selected: false },
  { children: "Tab 3", selected: false }

]

const SearchInput = () => {
  return (
    <Input prefixComponent={PrefixSearch} className={styles['dropdown-search']}>
      Search
    </Input>
  )
}

const Dropdown = () => {
  return (
    <div className={clsx([styles['dropdown-menu'], 'shadow'])}>
      <SearchInput />
      {menus.map((menu, index) => (
        <Menu key={index} selected={menu.selected}>
          {menu.children}
        </Menu>
      ))}
    </div>
  )
}