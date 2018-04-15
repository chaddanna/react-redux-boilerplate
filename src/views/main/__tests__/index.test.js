import { mount, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Component from '..';

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

    it("always renders 'main-view'", () => {
      expect(getComponent().find('.main-view')).toHaveLength(1);
    });

    it("always renders 'Header'", () => {
      expect(getComponent().find('Header')).toHaveLength(1);
    });

    it("always renders 'ContentBlock'", () => {
      expect(getComponent().find('ContentBlock')).toHaveLength(1);
    });
  });
});
