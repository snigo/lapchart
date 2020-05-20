import { FunctionComponent, useState, useEffect } from 'react';

import css from './topbar.module.scss';

interface TopbarProps {
  fixed: boolean;
}

const Topbar: FunctionComponent<TopbarProps> = ({ fixed }) => {
  const classList = [css.topbar];
  classList.push(css[`topbar-${fixed ? 'fixed' : 'idle'}`]);

  return (
    <header className={classList.join(' ')}>
      <div className={css['topbar-content']}>         
        <div className={`${css['topbar-logo']} ${css[`topbar-logo-${fixed ? 'fixed' : 'idle'}`]}`}>
          <div className={css['topbar-logo-mark']}>
            <img src="/images/stopwatch.svg" alt="Lapchart Logo"/>
          </div>
          <span className={css['topbar-logo-type']}>Lapchart</span>
        </div>
        <ul className={css['topbar-nav-list']}>
          <li className={css['topbar-nav-list-icon-item']}>
            <a href="https://github.com/snigo/lapchart" target="_blank" rel="noreferrer noopener">
              <img src="/images/socials/github.svg" alt="@snigo on GitHub"/>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Topbar;
