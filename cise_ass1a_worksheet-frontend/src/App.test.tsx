import { render, screen } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//default test
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//test by rendering
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('Addition', () => {
  //test by describing
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });

  //second test where calculation not same as result
  // it('knows that 2 and 2 make 4', () => {
  //   expect(2 + 2).toBe(5);
  // });
}

)
