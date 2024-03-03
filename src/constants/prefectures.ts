type Prefecture = {
  value: number;
  label: string;
  region?: string;
};

type Region = {
  value: number;
  label: string;
  prefectures: Prefecture[];
};

export const prefectures: Prefecture[] = [
  { value: 1, label: '北海道' },
  { value: 2, label: '青森県' },
  { value: 3, label: '岩手県' },
  { value: 4, label: '宮城県' },
  { value: 5, label: '秋田県' },
  { value: 6, label: '山形県' },
  { value: 7, label: '福島県' },
  { value: 8, label: '茨城県' },
  { value: 9, label: '栃木県' },
  { value: 10, label: '群馬県' },
  { value: 11, label: '埼玉県' },
  { value: 12, label: '千葉県' },
  { value: 13, label: '東京都' },
  { value: 14, label: '神奈川県' },
  { value: 15, label: '新潟県' },
  { value: 16, label: '富山県' },
  { value: 17, label: '石川県' },
  { value: 18, label: '福井県' },
  { value: 19, label: '山梨県' },
  { value: 20, label: '長野県' },
  { value: 21, label: '岐阜県' },
  { value: 22, label: '静岡県' },
  { value: 23, label: '愛知県' },
  { value: 24, label: '三重県' },
  { value: 25, label: '滋賀県' },
  { value: 26, label: '京都府' },
  { value: 27, label: '大阪府' },
  { value: 28, label: '兵庫県' },
  { value: 29, label: '奈良県' },
  { value: 30, label: '和歌山県' },
  { value: 31, label: '鳥取県' },
  { value: 32, label: '島根県' },
  { value: 33, label: '岡山県' },
  { value: 34, label: '広島県' },
  { value: 35, label: '山口県' },
  { value: 36, label: '徳島県' },
  { value: 37, label: '香川県' },
  { value: 38, label: '愛媛県' },
  { value: 39, label: '高知県' },
  { value: 40, label: '福岡県' },
  { value: 41, label: '佐賀県' },
  { value: 42, label: '長崎県' },
  { value: 43, label: '熊本県' },
  { value: 44, label: '大分県' },
  { value: 45, label: '宮崎県' },
  { value: 46, label: '鹿児島県' },
  { value: 47, label: '沖縄県' },
];

export const prefecturesKana: Prefecture[] = [
  { value: 1, label: 'ホッカイドウ' },
  { value: 2, label: 'アオモリケン' },
  { value: 3, label: 'イワテケン' },
  { value: 4, label: 'ミヤギケン' },
  { value: 5, label: 'アキタケン' },
  { value: 6, label: 'ヤマガタケン' },
  { value: 7, label: 'フクシマケン' },
  { value: 8, label: 'イバラキケン' },
  { value: 9, label: 'トチギケン' },
  { value: 10, label: 'グンマケン' },
  { value: 11, label: 'サイタマケン' },
  { value: 12, label: 'チバケン' },
  { value: 13, label: 'トウキョウト' },
  { value: 14, label: 'カナガワケン' },
  { value: 15, label: 'ニイガタケン' },
  { value: 16, label: 'トヤマケン' },
  { value: 17, label: 'イシカワケン' },
  { value: 18, label: 'フクイケン' },
  { value: 19, label: 'ヤマナシケン' },
  { value: 20, label: 'ナガノケン' },
  { value: 21, label: 'ギフケン' },
  { value: 22, label: 'シズオカケン' },
  { value: 23, label: 'アイチケン' },
  { value: 24, label: 'ミエケン' },
  { value: 25, label: 'シガケン' },
  { value: 26, label: 'キョウトフ' },
  { value: 27, label: 'オオサカフ' },
  { value: 28, label: 'ヒョウゴケン' },
  { value: 29, label: 'ナラケン' },
  { value: 30, label: 'ワカヤマケン' },
  { value: 31, label: 'トットリケン' },
  { value: 32, label: 'シマネケン' },
  { value: 33, label: 'オカヤマケン' },
  { value: 34, label: 'ヒロシマケン' },
  { value: 35, label: 'ヤマグチケン' },
  { value: 36, label: 'トクシマケン' },
  { value: 37, label: 'カガワケン' },
  { value: 38, label: 'エヒメケン' },
  { value: 39, label: 'コウチケン' },
  { value: 40, label: 'フクオカケン' },
  { value: 41, label: 'サガケン' },
  { value: 42, label: 'ナガサキケン' },
  { value: 43, label: 'クマモトケン' },
  { value: 44, label: 'オオイタケン' },
  { value: 45, label: 'ミヤザキケン' },
  { value: 46, label: 'カゴシマケン' },
  { value: 47, label: 'オキナワケン' },
];

export const regions: Region[] = [
  {
    value: 1,
    label: '北海道・東北地方',
    prefectures: [
      { value: 1, label: '北海道', region: '北海道' },
      { value: 2, label: '青森県', region: '東北' },
      { value: 3, label: '岩手県', region: '東北' },
      { value: 4, label: '宮城県', region: '東北' },
      { value: 5, label: '秋田県', region: '東北' },
      { value: 6, label: '山形県', region: '東北' },
      { value: 7, label: '福島県', region: '東北' }
    ]
  },
  {
    value: 2,
    label: '関東地方',
    prefectures: [
      { value: 8, label: '茨城県', region: '関東' },
      { value: 9, label: '栃木県', region: '関東' },
      { value: 10, label: '群馬県', region: '関東' },
      { value: 11, label: '埼玉県', region: '関東' },
      { value: 12, label: '千葉県', region: '関東' },
      { value: 13, label: '東京都', region: '関東' },
      { value: 14, label: '神奈川県', region: '関東' }
    ]
  },
  {
    value: 3,
    label: '中部地方',
    prefectures: [
      { value: 15, label: '新潟県', region: '中部' },
      { value: 16, label: '富山県', region: '中部' },
      { value: 17, label: '石川県', region: '中部' },
      { value: 18, label: '福井県', region: '中部' },
      { value: 19, label: '山梨県', region: '中部' },
      { value: 20, label: '長野県', region: '中部' },
      { value: 21, label: '岐阜県', region: '中部' },
      { value: 22, label: '静岡県', region: '中部' },
      { value: 23, label: '愛知県', region: '中部' },
    ]
  },
  {
    value: 4,
    label: '近畿地方',
    prefectures: [
      { value: 24, label: '三重県', region: '近畿' },
      { value: 25, label: '滋賀県', region: '近畿' },
      { value: 26, label: '京都府', region: '近畿' },
      { value: 27, label: '大阪府', region: '近畿' },
      { value: 28, label: '兵庫県', region: '近畿' },
      { value: 29, label: '奈良県', region: '近畿' },
      { value: 30, label: '和歌山県', region: '近畿' },
    ]
  },
  {
    value: 5,
    label: '中国地方',
    prefectures: [
      { value: 31, label: '鳥取県', region: '中国' },
      { value: 32, label: '島根県', region: '中国' },
      { value: 33, label: '岡山県', region: '中国' },
      { value: 34, label: '広島県', region: '中国' },
      { value: 35, label: '山口県', region: '中国' },
    ]
  },
  {
    value: 6,
    label: '四国地方',
    prefectures: [
      { value: 36, label: '徳島県', region: '四国' },
      { value: 37, label: '香川県', region: '四国' },
      { value: 38, label: '愛媛県', region: '四国' },
      { value: 39, label: '高知県', region: '四国' },
    ]
  },
  {
    value: 7,
    label: '九州・沖縄地方',
    prefectures: [
      { value: 40, label: '福岡県', region: '九州' },
      { value: 41, label: '佐賀県', region: '九州' },
      { value: 42, label: '長崎県', region: '九州' },
      { value: 43, label: '熊本県', region: '九州' },
      { value: 44, label: '大分県', region: '九州' },
      { value: 45, label: '宮崎県', region: '九州' },
      { value: 46, label: '鹿児島県', region: '九州' },
      { value: 47, label: '沖縄県', region: '九州' },
    ]
  }  
];
