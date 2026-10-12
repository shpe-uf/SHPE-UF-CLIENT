import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

export function renderWithMocks(ui, { mocks = [], addTypename = false } = {}) {
  return render(
    <MockedProvider mocks={mocks} addTypename={addTypename}>
      {ui}
    </MockedProvider>
  );
}

export * from '@testing-library/react';
