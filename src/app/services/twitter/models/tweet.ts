export type Tweet = {
  created_at: string | null;
  id: number;
  id_str: string;
  text: string | null;
  truncated: boolean;
  entities: object | null;
  extended_entities: object | null;
  source: string | null;
  in_reply_to_status_id: number | null;
  in_reply_to_status_id_str: string | null;
  in_reply_to_user_id: number | null;
  in_reply_to_user_id_str: string | null;
  in_reply_to_screen_name: string | null;
  user: any;
  geo: any;
  coordinates: any;
  place: any;
  contributors: any;
  is_quote_status: any;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  lang: string | null;
};

export const testTweet: Tweet = {
  created_at: 'Sat Nov 02 03:57:46 +0000 2019',
  id: 1190478078067138560,
  id_str: '1190478078067138560',
  text: '新宿御苑にも帰ってきてしまう https://t.co/E6oFQ7OLps',
  truncated: false,
  entities: {
    hashtags: [],
    symbols: [],
    user_mentions: [],
    urls: [],
    media: [
      {
        id: 1190478011667243008,
        id_str: '1190478011667243008',
        indices: [15, 38],
        media_url: 'http://pbs.twimg.com/media/EIVtcbZW4AAL-Xc.jpg',
        media_url_https: 'https://pbs.twimg.com/media/EIVtcbZW4AAL-Xc.jpg',
        url: 'https://t.co/E6oFQ7OLps',
        display_url: 'pic.twitter.com/E6oFQ7OLps',
        expanded_url:
          'https://twitter.com/uitspitss/status/1190478078067138560/photo/1',
        type: 'photo',
        sizes: {
          thumb: {
            w: 150,
            h: 150,
            resize: 'crop',
          },
          small: {
            w: 680,
            h: 510,
            resize: 'fit',
          },
          large: {
            w: 2048,
            h: 1536,
            resize: 'fit',
          },
          medium: {
            w: 1200,
            h: 900,
            resize: 'fit',
          },
        },
        features: {
          small: {
            faces: [],
          },
          orig: {
            faces: [],
          },
          large: {
            faces: [],
          },
          medium: {
            faces: [],
          },
        },
      },
    ],
  },
  extended_entities: {
    media: [
      {
        id: 1190478011667243008,
        id_str: '1190478011667243008',
        indices: [15, 38],
        media_url: 'http://pbs.twimg.com/media/EIVtcbZW4AAL-Xc.jpg',
        media_url_https: 'https://pbs.twimg.com/media/EIVtcbZW4AAL-Xc.jpg',
        url: 'https://t.co/E6oFQ7OLps',
        display_url: 'pic.twitter.com/E6oFQ7OLps',
        expanded_url:
          'https://twitter.com/uitspitss/status/1190478078067138560/photo/1',
        type: 'photo',
        sizes: {
          thumb: {
            w: 150,
            h: 150,
            resize: 'crop',
          },
          small: {
            w: 680,
            h: 510,
            resize: 'fit',
          },
          large: {
            w: 2048,
            h: 1536,
            resize: 'fit',
          },
          medium: {
            w: 1200,
            h: 900,
            resize: 'fit',
          },
        },
        features: {
          small: {
            faces: [],
          },
          orig: {
            faces: [],
          },
          large: {
            faces: [],
          },
          medium: {
            faces: [],
          },
        },
      },
    ],
  },
  source:
    '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
  in_reply_to_status_id: null,
  in_reply_to_status_id_str: null,
  in_reply_to_user_id: null,
  in_reply_to_user_id_str: null,
  in_reply_to_screen_name: null,
  user: {
    id: 3250436377,
    id_str: '3250436377',
    name: 'uitspitss',
    screen_name: 'uitspitss',
    location: 'web系',
    description:
      'programmer; Python, Django, Golang, React, Node.js, Emacs, VSCode',
    url: 'https://t.co/ZH1qBrfIHg',
    entities: {
      url: {
        urls: [
          {
            url: 'https://t.co/ZH1qBrfIHg',
            expanded_url: 'http://uitspitss.net',
            display_url: 'uitspitss.net',
            indices: [0, 23],
          },
        ],
      },
      description: {
        urls: [],
      },
    },
    protected: false,
    followers_count: 126,
    friends_count: 494,
    listed_count: 2,
    created_at: 'Sat Jun 20 05:39:25 +0000 2015',
    favourites_count: 4944,
    utc_offset: null,
    time_zone: null,
    geo_enabled: false,
    verified: false,
    statuses_count: 1759,
    lang: null,
    contributors_enabled: false,
    is_translator: false,
    is_translation_enabled: true,
    profile_background_color: 'C0DEED',
    profile_background_image_url:
      'http://abs.twimg.com/images/themes/theme1/bg.png',
    profile_background_image_url_https:
      'https://abs.twimg.com/images/themes/theme1/bg.png',
    profile_background_tile: false,
    profile_image_url:
      'http://pbs.twimg.com/profile_images/985265910389682176/1KatZiDN_normal.jpg',
    profile_image_url_https:
      'https://pbs.twimg.com/profile_images/985265910389682176/1KatZiDN_normal.jpg',
    profile_banner_url:
      'https://pbs.twimg.com/profile_banners/3250436377/1555080490',
    profile_link_color: '1DA1F2',
    profile_sidebar_border_color: 'C0DEED',
    profile_sidebar_fill_color: 'DDEEF6',
    profile_text_color: '333333',
    profile_use_background_image: true,
    has_extended_profile: false,
    default_profile: true,
    default_profile_image: false,
    can_media_tag: true,
    followed_by: false,
    following: false,
    follow_request_sent: false,
    notifications: false,
    translator_type: 'none',
  },
  geo: null,
  coordinates: null,
  place: null,
  contributors: null,
  is_quote_status: false,
  retweet_count: 0,
  favorite_count: 0,
  favorited: false,
  retweeted: false,
  possibly_sensitive: false,
  lang: 'ja',
};
