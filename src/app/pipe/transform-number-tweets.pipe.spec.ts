import { TransformNumberTweetsPipe } from './transform-number-tweets.pipe';

describe('TransformNumberTweetsPipe', () => {
  it('create an instance', () => {
    const pipe = new TransformNumberTweetsPipe();
    expect(pipe).toBeTruthy();
  });
});
