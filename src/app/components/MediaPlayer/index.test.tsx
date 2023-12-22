/* eslint-disable import/order */
import React from 'react';
import MediaPlayer from '.';
import { act } from '@testing-library/react-hooks';
import { Helmet } from 'react-helmet';
import { render } from '@testing-library/react';
import sampleBlocks from './fixture';

describe('MediaPlayer', () => {
  it('Loads requireJS and Bump4', async () => {
    await act(async () => {
      render(<MediaPlayer blocks={sampleBlocks} />);
    });

    const requireScript = Helmet.peek().scriptTags[0];
    const bumpScript = Helmet.peek().scriptTags[1];

    expect(requireScript.src).toEqual(
      'https://static.bbci.co.uk/frameworks/requirejs/0.13.0/sharedmodules/require.js',
    );

    expect(bumpScript.innerHTML).toContain(
      'https://emp.bbci.co.uk/emp/bump-4/bump-4',
    );
  });

  it('Calls Bump when the component loads', async () => {
    const mockRequire = jest.fn();

    window.requirejs = mockRequire;

    await act(async () => {
      render(<MediaPlayer blocks={sampleBlocks} />);
    });

    expect(mockRequire.mock.calls[0][0]).toStrictEqual(['bump-4']);
  });
});
