import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import TimelineContainer from '../components/TimelineContainer/TimelineContainer';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';
import HideOnScrollAppBar from '../components/HideOnScrollAppBar/HideOnScrollAppBar';

import titles from '../constants/titles';
import timelineItems from '../constants/timelineItems';

interface HomeProps {
  colorMode: {
    toggleColorMode: () => void;
  }
  window?: () => Window;
  children?: React.ReactElement;
}

export default function Home({
  colorMode,
  ...props
}: HomeProps) {
  const [language, setLanguage] = React.useState('en');
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const title = titles[language] || titles.en;
  const items = timelineItems[language] || timelineItems.en;

  return (
    <React.Fragment>
      <HideOnScrollAppBar
        title={title}
        onMenuClick={() => setOpen(true)}
        open={open}
        {...props}
      />
      <DrawerMenu
        open={open}
        handleClose={() => setOpen(false)}
        items={items}
        language={language}
        changeLanguage={setLanguage}
      />
      <Container maxWidth="xl" sx={{
        pt: 6
      }}>
        <TimelineContainer items={items} />
        <Fab color="primary"
          aria-label="toggle theme"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16
          }}
          onClick={colorMode.toggleColorMode}
        >
          <Brightness4Icon />
        </Fab>
      </Container>
    </React.Fragment>
  );
}