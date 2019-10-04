import { expect } from 'chai';
import { dummyFunction } from './index';

describe('dummy function', () => {
  it('logs value', () => {
    expect(dummyFunction('foo')).to.equal('foo');
  });
});
