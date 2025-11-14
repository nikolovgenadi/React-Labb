import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserStatus from './UserStatus';

test(`displays "logged in" text`, () => {
  render(<UserStatus isLoggedIn={true} />);
  expect(screen.getByText('logged in')).toBeInTheDocument();
});

test(`displays "NOT logged in" text`, () => {
  render(<UserStatus isLoggedIn={false} />);
  expect(screen.getByText('NOT logged in!')).toBeInTheDocument();
});

// alla andra filer togs bort endast kod kvar som efterfrågades av uppgiften.