import { useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Icons from '../../../icons';


const BottomFooterComponent = ({custom}) => {
  const [value, setValue] = useState(0);
  
  const linkItems = custom.data.links.map(linkObj => {
    const Icon = Icons[linkObj.style.icon]
    return <BottomNavigationAction key={linkObj.style.title} label={linkObj.style.title} icon={<Icon/>} />
  })


  return (
    <>
      <h3>‼️ BottomFooterComponent ‼️</h3>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          { linkItems }
        </BottomNavigation>
      </Box>
    </>
  );
}
export default BottomFooterComponent;