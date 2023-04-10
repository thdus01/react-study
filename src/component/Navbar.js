import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import Week1 from './Week1';
import Week2 from './Week2';
import Week3 from './Week3';
import Week4 from './Week4';
import Week5 from './Week5';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
 
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Navbar(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" open={open} color="info">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
           <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React 실습
          </Typography>
          <Button color="inherit" size='large'>22160003 강소연</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List>
          {['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6', 'Week7'].map((text, index) => (
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
        <Divider />
        <List>
          {['Week8', 'Week9', 'Week10', 'Week11', 'Week12', 'Week13', 'Week14'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <ul>
        <li>
            <ListItemButton>
              <Link to="/MainPage">MainPage</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week1">Week1</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week2">Week2</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week3">Week3</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week4">Week4</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week5">Week5</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week6">Week6</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week7">Week7</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week8">Week8</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week9">Week9</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week10">Week10</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week11">Week11</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week12">Week12</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week13">Week13</Link>
            </ListItemButton>
          </li>
          <li>
            <ListItemButton>
              <Link to="/Week14">Week14</Link>
            </ListItemButton>
          </li>
        </ul>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
        
        </Typography>
        <Typography paragraph>
        
        </Typography>
      </Main>
    </Box>
        </>
    );
}

export default Navbar;