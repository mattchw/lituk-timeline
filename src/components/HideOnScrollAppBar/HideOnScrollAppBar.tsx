import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Typography from '@mui/material/Typography';

interface HideOnScrollAppBarProps {
  title: string;
  onMenuClick: () => void;
  open: boolean;
  window?: () => Window;
}

const HideOnScrollAppBar: React.FC<HideOnScrollAppBarProps> = ({ title, onMenuClick, open, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onMenuClick}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default HideOnScrollAppBar;
