import { get as baseGet, post as basePost, RequestOptions } from '@/utils';

interface BilibiliResponse<T> {
  code: number;
  message: string;
  data: T;
}

const baseAPI = 'http://api.bilibili.com/x/web-interface/';

function retChecker<T>(res: BilibiliResponse<T>) {
  if (res.code != 0) {
    throw new Error(res.message);
  }
  return res.data;
}

export async function get<RetType>(
  ep: string,
  options?: Omit<RequestOptions, 'data'>
) {
  const res = await baseGet(baseAPI + ep, options);
  return retChecker<RetType>(res);
}

export async function post<RetType>(ep: string, options?: RequestOptions) {
  const res = await basePost(baseAPI + ep, options);
  return retChecker<RetType>(res);
}
