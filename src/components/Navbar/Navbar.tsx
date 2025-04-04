import { useState } from 'react';
import {
  IconFolder
} from '@tabler/icons-react';
import { Group, useMantineColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const data = [
  { link: '/collaborative-directory', label: 'Collaborative Directory', icon: IconFolder },
  { link: '/member-directory', label: 'Member Directory', icon: IconFolder },
];

export function NavbarSimple() {
  const [active, setActive] = useState('Billing');
  const { colorScheme } = useMantineColorScheme();
  const logo = colorScheme === 'dark' ? '/assets/CVxLogoBlack.png' : '/assets/CVxLogoWhite.png';

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Link to="/">
          <img src={logo} alt="Logo" className={classes.logo} />
          </Link>
        </Group>
        {links}
      </div>
    </nav>
  );
}