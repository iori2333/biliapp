import { KeyRequired } from '../../utils';

interface _VideoRequest {
  aid: number;
  bvid: string;
}

export type VideoRequest =
  | KeyRequired<_VideoRequest, 'aid'>
  | KeyRequired<_VideoRequest, 'bvid'>;

//https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/video/info.md
export const requestEndpoint = 'view';

export interface VideoInfo {
  bvid: string;
  aid: number;
  videos: number;
  tid: number;
  tname: string;
  copyright: number;
  pic: string;
  title: string;
  pubdate: number;
  ctime: number;
  desc: string;
  desc_v2: {
    raw_text: string;
    type: number;
    biz_id: number;
  }[];
  state: number;
  duration: number;
  forward?: number;
  mission_id: number;
  redirect_url?: string;
  rights: {
    bp: number;
    elec: number;
    download: number;
    movie: number;
    pay: number;
    hd5: number;
    no_reprint: number;
    autoplay: number;
    ugc_pay: number;
    is_cooperation: number;
    ugc_pay_preview: number;
  };
  owner: {
    mid: number;
    name: string;
    face: string;
  };
  stat: {
    aid: number;
    view: number;
    danmaku: number;
    reply: number;
    favorite: number;
    coin: number;
    share: number;
    now_rank: number;
    his_rank: number;
    like: number;
    dislike: number;
    evaluation: string;
    argue_msg: string;
  };
  dynamic: string;
  cid: number;
  dimension: {
    width: number;
    height: number;
    rotate: number;
  };
  pages: {
    cid: number;
    page: number;
    part: string;
    duration: number;
    vid: string;
    dimension: {
      width: number;
      height: number;
      rotate: number;
    };
  }[];
  subtitle: {
    allow_submit: boolean;
    list: {
      id: number;
      lan: string;
      lan_doc: string;
      is_lock: boolean;
      author_mid: number;
      subtitle_url: string;
      author: {
        mid: number;
        name: string;
        sex: string;
        face: string;
        sign: string;
      };
    }[];
  };
  staff: {
    mid: number;
    title: string;
    name: string;
    face: string;
    vip: {
      type: number;
      status: number;
    };
    official: {
      role: number;
      title: string;
      desc: string;
      type: number;
    };
    follower: number;
  }[];
}

export interface RegionVideoRequest {
  pn?: number;
  ps?: number;
  rid: number;
}

export interface RegionVideos {
  archives: VideoInfo[];
  page: {
    count: number;
    num: number;
    size: number;
  };
}
