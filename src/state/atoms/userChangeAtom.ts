import { atom } from 'recoil'

/** UserChangeModal表示制御Atom */
export const userChangeFlgState = atom<boolean>({
  key: 'CHANGE_USER_FLG',
  default: false,
})
