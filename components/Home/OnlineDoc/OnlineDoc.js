import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image'
import Link from 'next/link'
import Docs1 from './Docs1';
import Docs2 from './Docs2';
import Docs3 from './Docs3';
import Docs4 from './Docs4';
import { Container } from '@mui/material';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

 const OnlineDoc=() => { 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<div className='slider text-white py-16 '>
<Container>
<div className='text-center mt-5 mb-20'>
  <div className="docs-info">
  <h1 className='font-bold text-4xl my-5'>The Best Online Documentation</h1>
  <p className='leading-6'>Loaded with awesome features like Documentation, Knowledgebase, <br />
Forum & more!</p>
  </div>
</div>

      <Box sx={{ width: '100%', minHeight:'600px'}}>
      <Box sx={{ borderBottom: 2, borderColor: '#2C303A'}}>
        <Tabs   value={value} onChange={handleChange} >
          <Tab label="Docy" {...a11yProps(0)} />
          <Tab label="Gullu" {...a11yProps(1)} />
          <Tab label="Rogan" {...a11yProps(2)} />
          <Tab label="Sample" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Docs1/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Docs2/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Docs3/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Docs4/>
      </TabPanel>
    </Box>
  </Container>
</div>
  );
}
export default OnlineDoc;