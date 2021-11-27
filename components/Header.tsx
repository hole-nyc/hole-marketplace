import { css } from '@emotion/react'
import { NavLink } from './NavLink'

export const Header = () => {
  return (
    <>
    
      <header css={css`
        height: var(--header-height);
        position: sticky;
        top: 0;
        z-index: var(--header-z);
        border-bottom: var(--border-black);
        background-color: var(--white);
      `}><a href="/"><h1 className="hole-display" >{process.env.NEXT_PUBLIC_APP_TITLE}</h1></a>
        <NavLink passHref href="/">
          <a>Auctions</a>
        </NavLink>
        <NavLink passHref href="/list">
          <a>List</a>
        </NavLink>
        <NavLink passHref href="/about">
          <a>About</a>
        </NavLink>
      </header>
    </>
  )
}
