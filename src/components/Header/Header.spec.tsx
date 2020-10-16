import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Header from './Header';
import {mount} from 'enzyme';
import theme from '../../theme';

describe('<Header />', () => {
  it('renders properly children components', () => {
    const Dummy = () => <div>dummy component</div>;
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Header>
          <Dummy />
        </Header>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
