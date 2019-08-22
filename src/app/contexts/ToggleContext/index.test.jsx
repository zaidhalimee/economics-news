import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { ComponentUsingContext } from '../../../testHelpers/mockComponents';
import { ToggleContext, ToggleContextProvider } from './index';

describe('ToggleContext', () => {
  shouldMatchSnapshot(
    `should provide a toggles object`,
    <ToggleContextProvider>
      <ComponentUsingContext context={ToggleContext} />
    </ToggleContextProvider>,
  );
});
