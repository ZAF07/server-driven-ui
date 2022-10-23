import { useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Icons from '../../../icons';


const BottomFooterComponent = ({custom}) => {
  const [value, setValue] = useState(0);
  
  const footerData = custom.components.footerData;

  const linkItems = footerData.map(footer => {
    const Icon = Icons[footer.icon]
    return <BottomNavigationAction key={footer.title} label={footer.title} icon={<Icon/>} />
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