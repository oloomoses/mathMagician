import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Quote Component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Quote />);

    expect(tree).toMatchSnapshot();
  });
});
