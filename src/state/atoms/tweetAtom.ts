import { atom } from 'recoil'

/** TweetModal表示制御Atom */
export const tweetFlgState = atom<boolean>({
  key: 'TWEET_FLG',
  default: false,
})
