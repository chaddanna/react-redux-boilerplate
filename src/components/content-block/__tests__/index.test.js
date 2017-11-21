import { mount, shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Component from '..';

describe('Component', () => {
  let props;

  beforeEach(() => {
    props = {
      content: ''
    };
  });

  describe('Smoke tests', () => {
    it('snapshot test', () => {
      expect(
        renderer.create(<Component {...props} />).toJSON()
      ).toMatchSnapshot();
    });

    it('renders without crashing', () => {
      shallow(<Component {...props} />);
    });
  });

  describe('Mounted tests', () => {
    let mountedComponent;
    const getComponent = () => {
      if (!mountedComponent) {
        mountedComponent = mount(<Component {...props} />).find(Component);
      }

      return mountedComponent;
    };

    beforeEach(() => {
      mountedComponent = undefined;
    });

    it("always renders 'content-block'", () => {
      expect(getComponent().find('div.content-block')).toHaveLength(1);
    });

    describe("rendered 'content-block' with title set", () => {
      beforeEach(() => {
        props.content = 'Test';
      });

      it('sets content-block with Test', () => {
        expect(
          getComponent()
            .find('div.content-block')
            .text()
        ).toBe(`${props.content}`);
      });
    });
  });
});
