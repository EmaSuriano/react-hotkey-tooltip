import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from './ReactSixteenAdapter'; // FIX: when enzyme supports for context tag, replace this with enzyme-adapter-react-16

Enzyme.configure({ adapter: new Adapter() });
