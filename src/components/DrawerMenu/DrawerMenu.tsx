import React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

// icon
import LanguageIcon from '@mui/icons-material/Language';

import languages from '../../constants/languages';
import Drawer from '@mui/material/Drawer';
import { TimelineItem } from '../../constants/timelineItems';

interface Props {
  language: string;
  items?: TimelineItem[];
  open: boolean;
  handleClose: () => void;
  changeLanguage: (language: string) => void;
}

export default function DrawerMenu({
  language,
  items = [],
  open,
  handleClose,
  changeLanguage,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  function handleListItemClick(index: number) {
    const element = document.getElementById(`item-${index}`);
    element?.scrollIntoView({ behavior: 'smooth' });
    handleClose(); // you might want to close the drawer when an item is clicked
  }
  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
    setAnchorEl(null);
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{
          width: 250,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
        role="presentation"
      >
        <Box
          sx={{
            overflowY: 'auto',
          }}
        >
          <List>
            {items.map((item, index) => (
              <ListItem key={index} disablePadding onClick={() => handleListItemClick(index)}>
                <ListItemButton>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box
          sx={{
            mt: 'auto', // Push the Button to the bottom of the Drawer
          }}
        >
          <ListItem disablePadding onClick={handleClickListItem} aria-expanded={openMenu ? 'true' : undefined}>
            <ListItemButton>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary={`${languages[language].icon} ${languages[language].label}`} />
            </ListItemButton>
          </ListItem>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            {Object.keys(languages).map((language, index) => (
              <MenuItem key={index} onClick={() => handleLanguageChange(language)}>{`${languages[language].icon} ${languages[language].label}`}</MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
    </Drawer>
  );
}