import React from 'react';
import { shallow , mount , render } from 'enzyme';
import Enzyme from 'enzyme'
import Home from '../Components/Home/home';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../Store/store';


Enzyme.configure({ adapter: new Adapter() });
describe("Home Component Snapshot", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Provider store={store}>
        <Home />
      </Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});