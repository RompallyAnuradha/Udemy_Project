import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CourseTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} className=" mx-5">
        <div className="my-4">
            <h1>A broad selection of courses</h1>
            <p>Choose from 155,000 online video courses with new additions published every month</p>
        </div>
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="React" {...a11yProps(0)} />
          <Tab label="Exel" {...a11yProps(1)} />
          <Tab label="Web Development" {...a11yProps(2)} />
          <Tab label="Javascript" {...a11yProps(3)} />
          <Tab label="Python" {...a11yProps(4)} />
          
        </Tabs>
      </AppBar>

     
      <div className="border border-dark ">
     
      <TabPanel value={value} index={0}>
      <div style={{width:"800px"}} className="mx-5">
          <h4><strong>Expand your career opportunities with React</strong></h4>
          <p style={{fontSize:"14px" ,width:"800px" ,fontWeight:"400" , fontFamily:" sans-serif"}}>Whether you work in machine learning or finance, or are pursuing a career in web development , React is one of the most important skills you can learn. React is suited  for desktop, web, and Mobile applications. React's design philosophy emphasizes readability and reusability....</p>
      </div>
      <div style={{margin:"0px"}}>
        
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{width:"800px"}} className="mx-5">
          <h4><strong>Analyze and visualize data with Excel</strong></h4>
          <p style={{fontSize:"14px" ,width:"800px" ,fontWeight:"400" , fontFamily:" sans-serif"}}>Regardless of the industry you work in, Microsoft Office Excel is an invaluable spreadsheet program for organizing and representing data. Excel offers functions, formulas, and pivot tables to help you aggregate and then analyze large sets of information. Excel first truly appeared on the scene way back in 1987, when a version...</p>
      </div>


        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>

      <div style={{width:"800px"}} className="mx-5">
          <h4><strong>Build websites and applications with Web Development</strong></h4>
          <p style={{fontSize:"14px" ,width:"800px" ,fontWeight:"400" , fontFamily:" sans-serif"}}>The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on....</p>
      </div>


        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>

      <div style={{width:"800px"}} className="mx-5">
          <h4><strong>Grow your software development skills with JavaScript</strong></h4>
          <p style={{fontSize:"14px" ,width:"800px" ,fontWeight:"400" , fontFamily:" sans-serif"}}>JavaScript is one of the most ubiquitous programming languages on the planet, mostly because it's the backbone of interactive web applications. On top of that, JavaScript is a great language for beginners because it gives them a chance to write code that does something visual, which is exciting and helpful when ....</p>
      </div>


        Item Three
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div style={{width:"800px"}} className="mx-5">
          <h4><strong>Expand your career opportunities with Python</strong></h4>
          <p style={{fontSize:"14px" ,width:"800px" ,fontWeight:"400" , fontFamily:" sans-serif"}}>Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability....</p>
      </div>


        Item Three
      </TabPanel>
     
    </div>
    </div>
  );
}
