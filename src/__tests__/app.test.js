import { mount, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Component from '../app';

describe('Component', () => {
  let props;

  describe('Smoke tests', () => {
    it('snapshot test', () => {
      expect(
        renderer.create(<Component { ...props } />).toJSON()
      ).toMatchSnapshot();
    });

    it('renders without crashing', () => {
      shallow(<Component { ...props } />);
    });
  });

  describe('Mounted tests', () => {
    let mountedComponent;
    const getComponent = () => {
      if (!mountedComponent) {
        mountedComponent = mount(<Component { ...props } />).find(Component);
      }

      return mountedComponent;
    };

    beforeEach(() => {
      mountedComponent = undefined;
    });

    it("always renders 'Main'", () => {
      expect(getComponent().find('Main')).toHaveLength(1);
    });
  });
});
