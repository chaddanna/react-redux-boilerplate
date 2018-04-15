import { mount, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Component from '..';

describe('Component', () => {
  let props;

  beforeEach(() => {
    props = {
      title: ''
    };
  });

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

    it("always renders 'header'", () => {
      expect(getComponent().find('.header')).toHaveLength(1);
    });

    describe("rendered 'header' with title set", () => {
      beforeEach(() => {
        props.title = 'Test';
      });

      it('sets header with Test', () => {
        expect(
          getComponent()
            .find('.header')
            .text()
        ).toBe(`${props.title}`);
      });
    });
  });
});
