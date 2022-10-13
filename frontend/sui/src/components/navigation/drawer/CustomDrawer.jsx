import { useState, useContext, React } from 'react';
import { NavigationComponentContext } from '../../../store/customisation/navigationComponentStore';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

/*
  This component renders the Drawer navigation. We get the location of the drawer from the configurations users configure which is sent to the frontend via HTTP
*/ 

/*
  Could rename this to drawer navigation trigger button component. this would be used in the Header component
*/

function CustomDrawerComponent({customDetails}) {
  const {active, location, mainNavItems, subNavItems} = customDetails;
  const [navOpen, setNavOpen] = useState(false);

  const { navState, dispatch } = useContext(NavigationComponentContext);
  console.log('STATE -> ', navState);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setNavOpen(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navState.mainNavItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => alert(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {navState.subNavItems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      { navState.active &&
        <div key={location}>
          <Button onClick={toggleDrawer(true)}>{navState.location} Nav</Button>
          <Drawer
            anchor={location}
            open={navOpen}
            onClose={toggleDrawer(false)}
          >
            {list(location)}
          </Drawer>
        </div>
      }
    </div>
  );
}

export default CustomDrawerComponent;