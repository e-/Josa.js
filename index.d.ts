import _josa from "josa"

export type JosaFormat = '을/를' | '을' | '를' | '을를' | '은/는' | '은' | '는' | '은는' | '이/가' | '이' | '가' | '이가';

export interface IJosa {
  r: (word: string, format: JosaFormat) => string,
  c: (word: string, format: JosaFormat) => string
}

declare const Josa: IJosa = _josa;

export default Josa