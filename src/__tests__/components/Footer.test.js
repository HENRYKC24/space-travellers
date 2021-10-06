import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer';

it('should render correctly', () => {
  const tree = renderer.create(<BrowserRouter><Footer /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
