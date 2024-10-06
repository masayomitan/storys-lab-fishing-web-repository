import { Pref } from '../types/prefecture';

type RegionType = {
  value: number
  label: string
  image_url?: string
  prefectures: Pref[];
}

const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT

export const prefectures: Pref[] = [
  { id: 1, name: '北海道', name_kana: 'ホッカイドウ', image_url: `${baseUrl}/public/images/prefectures/1_hokkaidou.png` },
  { id: 2, name: '青森県', name_kana: 'アオモリケン', image_url: `${baseUrl}/public/images/prefectures/2_aomori.png` },
  { id: 3, name: '岩手県', name_kana: 'イワテケン', image_url: `${baseUrl}/public/images/prefectures/3_iwate.png` },
  { id: 4, name: '宮城県', name_kana: 'ミヤギケン', image_url: `${baseUrl}/public/images/prefectures/4_miyagi.png` },
  { id: 5, name: '秋田県', name_kana: 'アキタケン', image_url: `${baseUrl}/public/images/prefectures/5_akita.png` },
  { id: 6, name: '山形県', name_kana: 'ヤマガタケン', image_url: `${baseUrl}/public/images/prefectures/6_yamagata.png` },
  { id: 7, name: '福島県', name_kana: 'フクシマケン', image_url: `${baseUrl}/public/images/prefectures/7_fukushima.png` },
  { id: 8, name: '茨城県', name_kana: 'イバラキケン', image_url: `${baseUrl}/public/images/prefectures/8_ibaraki.png` },
  { id: 9, name: '栃木県', name_kana: 'トチギケン', image_url: `${baseUrl}/public/images/prefectures/9_tochigi.png` },
  { id: 10, name: '群馬県', name_kana: 'グンマケン', image_url: `${baseUrl}/public/images/prefectures/10_gunma.png` },
  { id: 11, name: '埼玉県', name_kana: 'サイタマケン', image_url: `${baseUrl}/public/images/prefectures/11_saitama.png` },
  { id: 12, name: '千葉県', name_kana: 'チバケン', image_url: `${baseUrl}/public/images/prefectures/12_chiba.png` },
  { id: 13, name: '東京都', name_kana: 'トウキョウト', image_url: `${baseUrl}/public/images/prefectures/13_tokyo.png` },
  { id: 14, name: '神奈川県', name_kana: 'カナガワケン', image_url: `${baseUrl}/public/images/prefectures/14_kanagawa.png` },
  { id: 15, name: '新潟県', name_kana: 'ニイガタケン', image_url: `${baseUrl}/public/images/prefectures/15_niigata.png` },
  { id: 16, name: '富山県', name_kana: 'トヤマケン', image_url: `${baseUrl}/public/images/prefectures/16_toyama.png` },
  { id: 17, name: '石川県', name_kana: 'イシカワケン', image_url: `${baseUrl}/public/images/prefectures/17_ishikawa.png` },
  { id: 18, name: '福井県', name_kana: 'フクイケン', image_url: `${baseUrl}/public/images/prefectures/18_fukui.png` },
  { id: 19, name: '山梨県', name_kana: 'ヤマナシケン', image_url: `${baseUrl}/public/images/prefectures/19_yamanashi.png` },
  { id: 20, name: '長野県', name_kana: 'ナガノケン', image_url: `${baseUrl}/public/images/prefectures/20_nagano.png` },
  { id: 21, name: '岐阜県', name_kana: 'ギフケン', image_url: `${baseUrl}/public/images/prefectures/21_gifu.png` },
  { id: 22, name: '静岡県', name_kana: 'シズオカケン', image_url: `${baseUrl}/public/images/prefectures/22_shizuoka.png` },
  { id: 23, name: '愛知県', name_kana: 'アイチケン', image_url: `${baseUrl}/public/images/prefectures/23_aichi.png` },
  { id: 24, name: '三重県', name_kana: 'ミエケン', image_url: `${baseUrl}/public/images/prefectures/24_mie.png` },
  { id: 25, name: '滋賀県', name_kana: 'シガケン', image_url: `${baseUrl}/public/images/prefectures/25_shiga.png` },
  { id: 26, name: '京都府', name_kana: 'キョウトフ', image_url: `${baseUrl}/public/images/prefectures/26_kyoto.png` },
  { id: 27, name: '大阪府', name_kana: 'オオサカフ', image_url: `${baseUrl}/public/images/prefectures/27_osaka.png` },
  { id: 28, name: '兵庫県', name_kana: 'ヒョウゴケン', image_url: `${baseUrl}/public/images/prefectures/28_hyogo.png` },
  { id: 29, name: '奈良県', name_kana: 'ナラケン', image_url: `${baseUrl}/public/images/prefectures/29_nara.png` },
  { id: 30, name: '和歌山県', name_kana: 'ワカヤマケン', image_url: `${baseUrl}/public/images/prefectures/30_wakayama.png` },
  { id: 31, name: '鳥取県', name_kana: 'トットリケン', image_url: `${baseUrl}/public/images/prefectures/31_tottori.png` },
  { id: 32, name: '島根県', name_kana: 'シマネケン', image_url: `${baseUrl}/public/images/prefectures/32_shimane.png` },
  { id: 33, name: '岡山県', name_kana: 'オカヤマケン', image_url: `${baseUrl}/public/images/prefectures/33_okayama.png` },
  { id: 34, name: '広島県', name_kana: 'ヒロシマケン', image_url: `${baseUrl}/public/images/prefectures/34_hiroshima.png` },
  { id: 35, name: '山口県', name_kana: 'ヤマグチケン', image_url: `${baseUrl}/public/images/prefectures/35_yamaguchi.png` },
  { id: 36, name: '徳島県', name_kana: 'トクシマケン', image_url: `${baseUrl}/public/images/prefectures/36_tokushima.png` },
  { id: 37, name: '香川県', name_kana: 'カガワケン', image_url: `${baseUrl}/public/images/prefectures/37_kagawa.png` },
  { id: 38, name: '愛媛県', name_kana: 'エヒメケン', image_url: `${baseUrl}/public/images/prefectures/38_ehime.png` },
  { id: 39, name: '高知県', name_kana: 'コウチケン', image_url: `${baseUrl}/public/images/prefectures/39_kochi.png` },
  { id: 40, name: '福岡県', name_kana: 'フクオカケン', image_url: `${baseUrl}/public/images/prefectures/40_fukuoka.png` },
  { id: 41, name: '佐賀県', name_kana: 'サガケン', image_url: `${baseUrl}/public/images/prefectures/41_saga.png` },
  { id: 42, name: '長崎県', name_kana: 'ナガサキケン', image_url: `${baseUrl}/public/images/prefectures/42_nagasaki.png` },
  { id: 43, name: '熊本県', name_kana: 'クマモトケン', image_url: `${baseUrl}/public/images/prefectures/43_kumamoto.png` },
  { id: 44, name: '大分県', name_kana: 'オオイタケン', image_url: `${baseUrl}/public/images/prefectures/44_oita.png` },
  { id: 45, name: '宮崎県', name_kana: 'ミヤザキケン', image_url: `${baseUrl}/public/images/prefectures/45_miyazaki.png` },
  { id: 46, name: '鹿児島県', name_kana: 'カゴシマケン', image_url: `${baseUrl}/public/images/prefectures/46_kagoshima.png` },
  { id: 47, name: '沖縄県', name_kana: 'オキナワケン', image_url: `${baseUrl}/public/images/prefectures/47_okinawa.png` },
]


export const regions: RegionType[] = [
  {
    value: 1,
    label: '北海道・東北地方',
    prefectures: [
      { id: 1, name: '北海道', region: '北海道' },
      { id: 2, name: '青森県', region: '東北' },
      { id: 3, name: '岩手県', region: '東北' },
      { id: 4, name: '宮城県', region: '東北' },
      { id: 5, name: '秋田県', region: '東北' },
      { id: 6, name: '山形県', region: '東北' },
      { id: 7, name: '福島県', region: '東北' }
    ]
  },
  {
    value: 2,
    label: '関東地方',
    prefectures: [
      { id: 8, name: '茨城県', region: '関東' },
      { id: 9, name: '栃木県', region: '関東' },
      { id: 10, name: '群馬県', region: '関東' },
      { id: 11, name: '埼玉県', region: '関東' },
      { id: 12, name: '千葉県', region: '関東' },
      { id: 13, name: '東京都', region: '関東' },
      { id: 14, name: '神奈川県', region: '関東' }
    ]
  },
  {
    value: 3,
    label: '中部地方',
    prefectures: [
      { id: 15, name: '新潟県', region: '中部' },
      { id: 16, name: '富山県', region: '中部' },
      { id: 17, name: '石川県', region: '中部' },
      { id: 18, name: '福井県', region: '中部' },
      { id: 19, name: '山梨県', region: '中部' },
      { id: 20, name: '長野県', region: '中部' },
      { id: 21, name: '岐阜県', region: '中部' },
      { id: 22, name: '静岡県', region: '中部' },
      { id: 23, name: '愛知県', region: '中部' },
    ]
  },
  {
    value: 4,
    label: '近畿地方',
    prefectures: [
      { id: 24, name: '三重県', region: '近畿' },
      { id: 25, name: '滋賀県', region: '近畿' },
      { id: 26, name: '京都府', region: '近畿' },
      { id: 27, name: '大阪府', region: '近畿' },
      { id: 28, name: '兵庫県', region: '近畿' },
      { id: 29, name: '奈良県', region: '近畿' },
      { id: 30, name: '和歌山県', region: '近畿' },
    ]
  },
  {
    value: 5,
    label: '中国地方',
    prefectures: [
      { id: 31, name: '鳥取県', region: '中国' },
      { id: 32, name: '島根県', region: '中国' },
      { id: 33, name: '岡山県', region: '中国' },
      { id: 34, name: '広島県', region: '中国' },
      { id: 35, name: '山口県', region: '中国' },
    ]
  },
  {
    value: 6,
    label: '四国地方',
    prefectures: [
      { id: 36, name: '徳島県', region: '四国' },
      { id: 37, name: '香川県', region: '四国' },
      { id: 38, name: '愛媛県', region: '四国' },
      { id: 39, name: '高知県', region: '四国' },
    ]
  },
  {
    value: 7,
    label: '九州・沖縄地方',
    prefectures: [
      { id: 40, name: '福岡県', region: '九州' },
      { id: 41, name: '佐賀県', region: '九州' },
      { id: 42, name: '長崎県', region: '九州' },
      { id: 43, name: '熊本県', region: '九州' },
      { id: 44, name: '大分県', region: '九州' },
      { id: 45, name: '宮崎県', region: '九州' },
      { id: 46, name: '鹿児島県', region: '九州' },
      { id: 47, name: '沖縄県', region: '九州' },
    ]
  }  
];
