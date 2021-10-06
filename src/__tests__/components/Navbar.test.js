import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../../components/Navbar';

it('should render correctly', () => {
  const tree = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
