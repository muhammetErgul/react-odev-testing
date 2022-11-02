import {render,screen} from '@testing-library/react';
import React from 'react';
import  '@testing-library/jest-dom';
import Header from '../Header';

test('headerda ki başlık kısmı ', () => {
  render(<Header/>)

  const headerText = screen.getByText(/Emoji Search/i);
  expect(headerText).toBeInTheDocument();
})
