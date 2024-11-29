import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Home from './Home';

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
      <Tab eventKey="profile" title="About Us">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact Us">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Navbar;