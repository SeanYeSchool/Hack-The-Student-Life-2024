import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Schedule from './Schedule';

function Navbar() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Home/>
      </Tab>
      <Tab eventKey="schedule" title="Schedule">
        <Schedule/>
      </Tab>
      <Tab eventKey="profile" title="About Us">
        <About/>
      </Tab>
      <Tab eventKey="contact" title="Contact Us">
        <Contact/>
      </Tab>
    </Tabs>
  );
}

export default Navbar;