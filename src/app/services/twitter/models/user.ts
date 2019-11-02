export type User = {
  contributors_enabled: boolean;
  created_at: string | null;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string | null;
  entities: object;
  favourites_count: number;
  follow_request_sent: boolean;
  followers_count: number;
  following: boolean;
  friends_count: number;
  geo_enabled: boolean;
  has_extended_profile: boolean;
  id: number;
  id_str: string;
  is_translation_enabled: boolean;
  is_translator: boolean;
  lang: string | null;
  listed_count: number | null;
  location: string | null;
  name: string;
  needs_phone_verification: boolean;
  notifications: boolean;
  profile_background_color: string | null;
  profile_background_image_url: string | null;
  profile_background_image_url_https: string | null;
  profile_background_tile: boolean;
  profile_banner_url: string | null;
  profile_image_url: string | null;
  profile_image_url_https: string | null;
  profile_link_color: string | null;
  profile_location: string | null;
  profile_sidebar_border_color: string | null;
  profile_sidebar_fill_color: string | null;
  profile_text_color: string | null;
  profile_use_background_image: boolean;
  protected: boolean;
  screen_name: string | null;
  status: object;
  statuses_count: number;
  suspended: boolean;
  time_zone: string | null;
  translator_type: string;
  url: string | null;
  utc_offset: string | null;
  verified: boolean;
};

export const defaultUser: User = {
  id: 3250436377,
  id_str: '3250436377',
  name: 'uitspitss',
  screen_name: 'uitspitss',
  location: 'web系',
  profile_location: null,
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
  favourites_count: 4923,
  utc_offset: null,
  time_zone: null,
  geo_enabled: false,
  verified: false,
  statuses_count: 1740,
  lang: null,
  status: {
    created_at: 'Sat Oct 26 11:11:00 +0000 2019',
    id: 1188050388047450113,
    id_str: '1188050388047450113',
    text:
      'RT @Chouchouholic: Chouchouの最新アルバム『code01 oort』は、Spotify、Apple Music、Amazon Music、YouTube Music、Google Play、AWA、Deezer、Beetport、Onkyo、Shaza…',
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [
        {
          screen_name: 'Chouchouholic',
          name: 'Chouchou｜New Album “oort” Out 10.18',
          id: 60929050,
          id_str: '60929050',
          indices: [3, 17],
        },
      ],
      urls: [],
    },
    source:
      '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    retweeted_status: {
      created_at: 'Sun Oct 20 08:34:49 +0000 2019',
      id: 1185836759680110592,
      id_str: '1185836759680110592',
      text:
        'Chouchouの最新アルバム『code01 oort』は、Spotify、Apple Music、Amazon Music、YouTube Music、Google Play、AWA、Deezer、Beetport、Onkyo、… https://t.co/7QaAzzOwtZ',
      truncated: true,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: [
          {
            url: 'https://t.co/7QaAzzOwtZ',
            expanded_url:
              'https://twitter.com/i/web/status/1185836759680110592',
            display_url: 'twitter.com/i/web/status/1…',
            indices: [117, 140],
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
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 27,
      favorite_count: 42,
      favorited: true,
      retweeted: true,
      possibly_sensitive: false,
      lang: 'ja',
    },
    is_quote_status: false,
    retweet_count: 27,
    favorite_count: 0,
    favorited: true,
    retweeted: true,
    lang: 'ja',
  },
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
  following: false,
  follow_request_sent: false,
  notifications: false,
  translator_type: 'none',
  suspended: false,
  needs_phone_verification: false,
};
