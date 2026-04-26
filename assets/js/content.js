
const SITE = {
  name: "TokyoLab",
  url: "https://tokyolab.org",
  author: "Jeffrey",
};


const SOCIAL_LINKS = [
  {
    key: "x",
    label: "X",
    url: "https://x.com/tokyoxlab",
    icon: "x"
  },
  {
    key: "telegram",
    label: "Telegram",
    url: "https://t.me/tokyo_lab",
    icon: "telegram"
  },
  {
    key: "instagram",
    label: "Instagram",
    url: "https://instagram.com/",
    icon: "instagram"
  },
  {
    key: "youtube",
    label: "YouTube",
    url: "https://youtube.com/@earth_f",
    icon: "youtube"
  },
  {
    key: "github",
    label: "GitHub",
    url: "https://github.com/",
    icon: "github"
  },
  {
    key: "mail",
    label: "Email",
    url: "mailto:hello@tokyolab.org",
    icon: "mail"
  }
];


const FEATURED_SOCIALS = [
  {
    key: "telegram",
    label: "Telegram Channel",
    handle: "@tokyo_lab",
    desc: {
      en: "Short updates, behind-the-scenes notes, and fragments from TokyoLab.",
      zh: "短更新、幕后记录，以及 TokyoLab 的一些生活碎片。",
      ja: "短い更新、制作の裏側、TokyoLab の断片。"
    },
    url: "https://t.me/tokyo_lab",
    icon: "telegram"
  },
  {
    key: "x",
    label: "X",
    handle: "@tokyoxlab",
    desc: {
      en: "Photography, thoughts, and public notes in real time.",
      zh: "摄影、想法和实时公开记录。",
      ja: "写真、考え、リアルタイムの公開メモ。"
    },
    url: "https://x.com/tokyoxlab",
    icon: "x"
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@your_instagram",
    desc: {
      en: "Selected frames, travel moments, and visual diary updates.",
      zh: "精选照片、旅行瞬间和视觉日记更新。",
      ja: "選んだ写真、旅の瞬間、ビジュアル日記の更新。"
    },
    url: "https://instagram.com/",
    icon: "instagram"
  }
];

const I18N = {
  en: {
    nav: { photos: "Photos", posts: "Posts", about: "About", sponsors: "Sponsors", search: "Search" },
    home: {
      kicker: "Tokyo based visual diary",
      title: "Quiet\nframes\nfrom\nJapan.",
      intro: "Photography, hiking, sea wind, small streets, and the quiet moments that deserve a place outside social media.",
      sideYear: "2026 / archive",
      sideText: "TokyoLab is a small personal archive for photographs, travel notes, and fragments of life in Japan.",
      sideLink: "Read about TokyoLab →",
      latestPhotos: "Latest photos",
      viewAll: "View all →",
      latestPosts: "Latest posts",
      archive: "Archive →"
    },
    pages: {
      photosKicker: "Visual archive",
      photosTitle: "Photos",
      photosIntro: "A visual archive of places I walked through. Replace these placeholders with your own photographs, and keep the captions short.",
      postsKicker: "Writing archive",
      postsTitle: "Posts",
      postsIntro: "Notes on hiking, photography, Japan, and the quiet parts of life. Simple archive first, decoration second.",
      searchKicker: "Find something",
      searchTitle: "Search",
      searchPlaceholder: "Search...",
      searchEmpty: "Search photos, posts, locations, cameras, lenses, or tags.",
      noResults: "No results for",
      aboutKicker: "About",
      aboutTitle: "TokyoLab",
      aboutLabel: "Jeffrey / Tokyo",
      aboutP1: "I’m Jeffrey, a photographer and writer based in Tokyo. I use photos and words to document hiking, travel, and the quiet moments in life.",
      aboutP2: "TokyoLab is my personal archive: not a feed, not a portfolio template, but a small place for things I want to keep.",
      aboutP3: "You can replace this page with your own introduction, social links, camera notes, or travel map later."
    },
    photo: {
      location: "Location", date: "Date", camera: "Camera", lens: "Lens", settings: "Settings",
      note: "Note", related: "Related photos", allPhotos: "All photos →", backPhotos: "Back to photos"
    },
    sponsors: {
      kicker: "Support the archive",
      title: "Sponsors",
      thanks: "Great thanks for all the sponsors.",
      intro: "If you enjoy TokyoLab and find the photos or notes useful, you can support the archive. It helps keep this site independent, quiet, and outside the social media feed.",
      support: "Support TokyoLab",
      howLink: "How does this work?",
      circles: "Sponsor Circles",
      tiers: "Sponsor Tiers",
      coffee: "Coffee",
      film: "Film Roll",
      journey: "Journey",
      priceCoffee: "¥500 / once",
      priceFilm: "¥1,500 / once",
      priceJourney: "¥3,000+ / once",
      descCoffee: "A small thank-you for a photo, post, or guide you liked.",
      descFilm: "Support future photo walks, hosting, and archive maintenance.",
      descJourney: "For readers who want to support TokyoLab as a long-term personal project.",
      choose: "Choose payment →",
      payments: "Payment methods",
      paymentIntro: "Replace these placeholders with your real links, QR codes, or wallet addresses later.",
      buyCoffee: "Buy Me a Coffee",
      buyCoffeeDesc: "Good for international visitors and small one-time support.",
      paypal: "PayPal",
      paypalDesc: "Simple international payment option.",
      alipay: "Alipay",
      alipayDesc: "Useful for Chinese readers and RMB support.",
      kofi: "Ko-fi",
      kofiDesc: "Creator-style support page, clean and easy to share.",
      crypto: "Crypto",
      cryptoDesc: "Optional wallet support for readers who prefer USDT or stablecoins.",
      addLink: "Add your link here",
      addPaypal: "Add your PayPal.me link",
      addAlipay: "Add Alipay QR code / link",
      addKofi: "Add your Ko-fi link",
      addCrypto: "Add wallet / network carefully",
      howTitle: "How does this work?",
      howLabel: "Simple / optional",
      howP1: "Sponsorship is optional. The site stays free to read. Support only means you want to help keep TokyoLab online and encourage more photographs, notes, and travel records.",
      howP2: "For privacy, this static version does not collect payment information. All payment links should point to external services you control."
    },
    footer: "Photography / Hiking / Archive"
  },
  zh: {
    nav: { photos: "照片", posts: "文章", about: "关于", sponsors: "赞助", search: "搜索" },
    home: {
      kicker: "生活在东京的视觉日记",
      title: "来自\n日本的\n安静\n画面。",
      intro: "摄影、徒步、海风、小街道，以及那些不想只留在社交媒体里的安静瞬间。",
      sideYear: "2026 / 档案",
      sideText: "TokyoLab 是一个小型个人档案馆，用来保存照片、旅行笔记和在日本生活的片段。",
      sideLink: "了解 TokyoLab →",
      latestPhotos: "最新照片",
      viewAll: "查看全部 →",
      latestPosts: "最新文章",
      archive: "文章归档 →"
    },
    pages: {
      photosKicker: "视觉档案",
      photosTitle: "照片",
      photosIntro: "这里保存我走过的地方。之后可以把占位图换成你的真实照片，文字保持简短就好。",
      postsKicker: "文字档案",
      postsTitle: "文章",
      postsIntro: "关于徒步、摄影、日本生活，以及那些安静时刻的记录。先做好归档，再谈装饰。",
      searchKicker: "找点什么",
      searchTitle: "搜索",
      searchPlaceholder: "搜索...",
      searchEmpty: "可以搜索照片、文章、地点、相机、镜头或标签。",
      noResults: "没有找到结果：",
      aboutKicker: "关于",
      aboutTitle: "TokyoLab",
      aboutLabel: "Jeffrey / 东京",
      aboutP1: "我是 Jeffrey，目前生活在东京。我用照片和文字记录徒步、旅行，以及生活里那些安静但值得留下来的瞬间。",
      aboutP2: "TokyoLab 是我的个人档案馆：不是信息流，也不是模板作品集，而是一个保存重要片段的小地方。",
      aboutP3: "之后你可以把这里换成自己的介绍、社交链接、相机装备或旅行地图。"
    },
    photo: {
      location: "地点", date: "日期", camera: "相机", lens: "镜头", settings: "参数",
      note: "文字", related: "相关照片", allPhotos: "全部照片 →", backPhotos: "返回照片"
    },
    sponsors: {
      kicker: "支持这个档案馆",
      title: "赞助",
      thanks: "感谢所有支持者。",
      intro: "如果你喜欢 TokyoLab，觉得这里的照片或文字对你有帮助，可以支持这个档案馆。它会帮助这个网站保持独立、安静，并继续存在于社交媒体之外。",
      support: "支持 TokyoLab",
      howLink: "这是怎么运作的？",
      circles: "赞助者",
      tiers: "赞助档位",
      coffee: "Coffee",
      film: "Film Roll",
      journey: "Journey",
      priceCoffee: "¥500 / 一次",
      priceFilm: "¥1,500 / 一次",
      priceJourney: "¥3,000+ / 一次",
      descCoffee: "如果你喜欢某张照片、某篇文章或某个指南，可以请我喝杯咖啡。",
      descFilm: "支持未来的拍摄、网站维护和档案整理。",
      descJourney: "适合想长期支持 TokyoLab 这个个人项目的读者。",
      choose: "选择支付方式 →",
      payments: "支付方式",
      paymentIntro: "之后可以把这里替换成你的真实链接、二维码或钱包地址。",
      buyCoffee: "Buy Me a Coffee",
      buyCoffeeDesc: "适合海外读者的一次性小额支持。",
      paypal: "PayPal",
      paypalDesc: "简单的国际支付方式。",
      alipay: "支付宝",
      alipayDesc: "适合中文读者和人民币支持。",
      kofi: "Ko-fi",
      kofiDesc: "创作者常用的支持页面，干净也容易分享。",
      crypto: "Crypto",
      cryptoDesc: "适合偏好 USDT 或稳定币的读者。",
      addLink: "添加你的链接",
      addPaypal: "添加你的 PayPal.me 链接",
      addAlipay: "添加支付宝二维码 / 链接",
      addKofi: "添加你的 Ko-fi 链接",
      addCrypto: "谨慎添加钱包地址 / 网络",
      howTitle: "这是怎么运作的？",
      howLabel: "简单 / 自愿",
      howP1: "赞助完全自愿。网站内容仍然免费阅读。支持只是表示你愿意帮助 TokyoLab 继续在线，并鼓励更多照片、笔记和旅行记录。",
      howP2: "出于隐私考虑，这个静态版本不会收集支付信息。所有支付链接都应该跳转到你自己控制的外部服务。"
    },
    footer: "摄影 / 徒步 / 档案"
  },
  ja: {
    nav: { photos: "写真", posts: "記事", about: "About", sponsors: "支援", search: "検索" },
    home: {
      kicker: "東京を拠点にしたビジュアル日記",
      title: "日本からの\n静かな\nフレーム。",
      intro: "写真、ハイキング、海風、小さな路地、そしてSNSだけに流したくない静かな瞬間。",
      sideYear: "2026 / アーカイブ",
      sideText: "TokyoLab は、写真、旅の記録、日本での生活の断片を残すための小さな個人アーカイブです。",
      sideLink: "TokyoLab について →",
      latestPhotos: "最新の写真",
      viewAll: "すべて見る →",
      latestPosts: "最新の記事",
      archive: "アーカイブ →"
    },
    pages: {
      photosKicker: "ビジュアルアーカイブ",
      photosTitle: "写真",
      photosIntro: "歩いてきた場所の記録です。あとで実際の写真に差し替えて、キャプションは短く保てます。",
      postsKicker: "文章アーカイブ",
      postsTitle: "記事",
      postsIntro: "ハイキング、写真、日本での生活、そして静かな時間についての記録です。まずはシンプルなアーカイブとして。",
      searchKicker: "探す",
      searchTitle: "検索",
      searchPlaceholder: "検索...",
      searchEmpty: "写真、記事、場所、カメラ、レンズ、タグを検索できます。",
      noResults: "検索結果がありません：",
      aboutKicker: "About",
      aboutTitle: "TokyoLab",
      aboutLabel: "Jeffrey / Tokyo",
      aboutP1: "Jeffrey です。東京を拠点に、写真と言葉でハイキング、旅、日常の静かな瞬間を記録しています。",
      aboutP2: "TokyoLab は私の個人アーカイブです。フィードでもテンプレートのポートフォリオでもなく、残しておきたいもののための小さな場所です。",
      aboutP3: "あとで自己紹介、SNSリンク、カメラ機材、旅行マップなどに差し替えられます。"
    },
    photo: {
      location: "場所", date: "日付", camera: "カメラ", lens: "レンズ", settings: "設定",
      note: "メモ", related: "関連写真", allPhotos: "すべての写真 →", backPhotos: "写真一覧へ"
    },
    sponsors: {
      kicker: "アーカイブを支援",
      title: "支援",
      thanks: "すべての支援者に感謝します。",
      intro: "TokyoLab の写真や文章を楽しんでいただけたら、このアーカイブを支援できます。サイトを独立した静かな場所として続ける助けになります。",
      support: "TokyoLab を支援",
      howLink: "仕組みを見る",
      circles: "支援者",
      tiers: "支援プラン",
      coffee: "Coffee",
      film: "Film Roll",
      journey: "Journey",
      priceCoffee: "¥500 / 1回",
      priceFilm: "¥1,500 / 1回",
      priceJourney: "¥3,000+ / 1回",
      descCoffee: "気に入った写真、記事、ガイドへの小さなお礼として。",
      descFilm: "今後の写真散歩、ホスティング、アーカイブの維持を支援します。",
      descJourney: "TokyoLab を長期的に支援したい方向けです。",
      choose: "支払い方法を選ぶ →",
      payments: "支払い方法",
      paymentIntro: "あとで実際のリンク、QRコード、ウォレットアドレスに差し替えてください。",
      buyCoffee: "Buy Me a Coffee",
      buyCoffeeDesc: "海外の読者や小額の一回支援に向いています。",
      paypal: "PayPal",
      paypalDesc: "シンプルな国際決済方法です。",
      alipay: "Alipay",
      alipayDesc: "中国語圏の読者や人民元での支援に便利です。",
      kofi: "Ko-fi",
      kofiDesc: "クリエイター向けの支援ページで、共有しやすいです。",
      crypto: "Crypto",
      cryptoDesc: "USDT やステーブルコインを使いたい読者向けです。",
      addLink: "リンクを追加",
      addPaypal: "PayPal.me リンクを追加",
      addAlipay: "Alipay QRコード / リンクを追加",
      addKofi: "Ko-fi リンクを追加",
      addCrypto: "ウォレット / ネットワークを慎重に追加",
      howTitle: "仕組み",
      howLabel: "シンプル / 任意",
      howP1: "支援は任意です。サイトは無料で読めます。支援は TokyoLab をオンラインで続け、写真や記録を増やすための応援です。",
      howP2: "プライバシーのため、この静的サイトでは支払い情報を収集しません。支払いリンクはあなたが管理する外部サービスに設定してください。"
    },
    footer: "写真 / ハイキング / アーカイブ"
  }
};

const photos = [
  {
    slug: "otaru-hokkaido",
    src: "assets/photos/otaru-hokkaido.svg",
    detailSrc: "../assets/photos/otaru-hokkaido.svg",
    title: { en: "Otaru, Hokkaido", zh: "小樽，北海道", ja: "小樽、北海道" },
    location: { en: "Otaru, Hokkaido, Japan", zh: "日本 北海道 小樽", ja: "日本・北海道・小樽" },
    date: "2026-02-14",
    year: "2026",
    camera: "Sony α7C II",
    lens: "FE 35mm F1.8",
    focalLength: "35mm",
    aperture: "f/4",
    shutter: "1/500s",
    iso: "ISO 100",
    tags: ["sea", "hokkaido"],
    caption: { en: "A quiet afternoon by the water.", zh: "水边一个安静的下午。", ja: "水辺の静かな午後。" },
    note: {
      en: "Otaru feels like a city that keeps its memories close to the canal. The light was soft, the wind was cold, and every corner looked like an old postcard.",
      zh: "小樽像是一座把记忆留在运河边的城市。光线很软，风很冷，每个角落都像一张旧明信片。",
      ja: "小樽は、運河のそばに記憶を残している街のように感じました。光は柔らかく、風は冷たく、どの角も古いポストカードのようでした。"
    }
  },
  {
    slug: "okutama-tokyo",
    src: "assets/photos/okutama-tokyo.svg",
    detailSrc: "../assets/photos/okutama-tokyo.svg",
    title: { en: "Okutama, Tokyo", zh: "奥多摩，东京", ja: "奥多摩、東京" },
    location: { en: "Okutama, Tokyo, Japan", zh: "日本 东京 奥多摩", ja: "日本・東京・奥多摩" },
    date: "2026-01-22",
    year: "2026",
    camera: "iPhone 15 Pro",
    lens: "Main Camera",
    focalLength: "24mm equiv.",
    aperture: "f/1.8",
    shutter: "1/250s",
    iso: "ISO 64",
    tags: ["mountain", "tokyo"],
    caption: { en: "Where the city finally becomes silent.", zh: "城市终于安静下来的地方。", ja: "都市がようやく静かになる場所。" },
    note: {
      en: "The train still says Tokyo, but the air is already different. Okutama is where I go when I need the city to become quiet.",
      zh: "电车还在东京，但空气已经不一样了。需要城市安静下来的时候，我会去奥多摩。",
      ja: "電車の行き先はまだ東京ですが、空気はもう違います。街に静かになってほしいとき、私は奥多摩へ向かいます。"
    }
  },
  {
    slug: "kamakura-sea",
    src: "assets/photos/kamakura-sea.svg",
    detailSrc: "../assets/photos/kamakura-sea.svg",
    title: { en: "Kamakura, Kanagawa", zh: "镰仓，神奈川", ja: "鎌倉、神奈川" },
    location: { en: "Kamakura, Kanagawa, Japan", zh: "日本 神奈川 镰仓", ja: "日本・神奈川・鎌倉" },
    date: "2025-09-03",
    year: "2025",
    camera: "Fujifilm X100V",
    lens: "23mm F2",
    focalLength: "35mm equiv.",
    aperture: "f/5.6",
    shutter: "1/1000s",
    iso: "ISO 160",
    tags: ["sea", "street"],
    caption: { en: "The sea was louder than my thoughts.", zh: "海声比我的思绪更大。", ja: "海の音は、考えごとより大きかった。" },
    note: { en: "", zh: "", ja: "" }
  },
  {
    slug: "izu-campfire",
    src: "assets/photos/izu-campfire.svg",
    detailSrc: "../assets/photos/izu-campfire.svg",
    title: { en: "Campfire, Izu", zh: "伊豆，篝火", ja: "伊豆、焚き火" },
    location: { en: "Izu, Shizuoka, Japan", zh: "日本 静冈 伊豆", ja: "日本・静岡・伊豆" },
    date: "2025-08-17",
    year: "2025",
    camera: "Sony α7C II",
    lens: "FE 55mm F1.8",
    focalLength: "55mm",
    aperture: "f/1.8",
    shutter: "1/80s",
    iso: "ISO 1600",
    tags: ["night", "izu"],
    caption: { en: "Fire, wind, and a little silence.", zh: "火、风，以及一点安静。", ja: "火と風、そして少しの静けさ。" },
    note: {
      en: "At night, the fire becomes the center of the trip. People talk less, look longer, and remember why they came.",
      zh: "到了晚上，火会变成旅程的中心。人们说得更少，看得更久，也更容易想起自己为什么来到这里。",
      ja: "夜になると、焚き火が旅の中心になります。人は少し黙り、長く見つめ、なぜここに来たのかを思い出します。"
    }
  },
  {
    slug: "kyoto-autumn",
    src: "assets/photos/kyoto-autumn.svg",
    detailSrc: "../assets/photos/kyoto-autumn.svg",
    title: { en: "Autumn, Kyoto", zh: "京都，秋天", ja: "京都、秋" },
    location: { en: "Kyoto, Japan", zh: "日本 京都", ja: "日本・京都" },
    date: "2025-11-26",
    year: "2025",
    camera: "Fujifilm X-T5",
    lens: "XF 35mm F1.4",
    focalLength: "53mm equiv.",
    aperture: "f/2.8",
    shutter: "1/320s",
    iso: "ISO 250",
    tags: ["autumn", "kyoto"],
    caption: { en: "A season that refuses to be rushed.", zh: "一个不愿被催促的季节。", ja: "急がされることを拒む季節。" },
    note: {
      en: "Kyoto in autumn is almost too easy to photograph. The real challenge is to keep the frame quiet.",
      zh: "秋天的京都几乎太容易被拍得好看。真正难的是，让画面保持安静。",
      ja: "秋の京都は、写真にするには簡単すぎるほど美しい。本当に難しいのは、フレームを静かに保つことです。"
    }
  },
  {
    slug: "tokyo-street",
    src: "assets/photos/tokyo-street.svg",
    detailSrc: "../assets/photos/tokyo-street.svg",
    title: { en: "Tokyo Street", zh: "东京街道", ja: "東京の路地" },
    location: { en: "Tokyo, Japan", zh: "日本 东京", ja: "日本・東京" },
    date: "2025-07-09",
    year: "2025",
    camera: "Ricoh GR III",
    lens: "18.3mm F2.8",
    focalLength: "28mm equiv.",
    aperture: "f/5.6",
    shutter: "1/400s",
    iso: "ISO 200",
    tags: ["tokyo", "street"],
    caption: { en: "Small streets, late light.", zh: "小街道，迟来的光。", ja: "小さな路地、遅い光。" },
    note: { en: "", zh: "", ja: "" }
  }
];

const posts = [
  {
    title: { en: "Why I started TokyoLab", zh: "我为什么开始做 TokyoLab", ja: "TokyoLab を始めた理由" },
    date: "2026-04-25",
    year: "2026",
    monthDay: "Apr 25",
    read: "4 min",
    tags: ["note", "tokyo"],
    url: "posts/why-i-started-tokyolab.html",
    excerpt: {
      en: "A short note on building a place for photos, hiking, and quiet records outside social media.",
      zh: "一篇短文，关于为什么想在社交媒体之外，为照片、徒步和安静记录建立一个地方。",
      ja: "写真、ハイキング、静かな記録のために、SNSの外に小さな場所を作ることについて。"
    }
  },
  {
    title: { en: "A quiet walk in Okutama", zh: "在奥多摩的一次安静散步", ja: "奥多摩の静かな散歩" },
    date: "2026-04-12",
    year: "2026",
    monthDay: "Apr 12",
    read: "6 min",
    tags: ["hiking", "tokyo"],
    url: "posts/quiet-walk-in-okutama.html",
    excerpt: {
      en: "Notes from the edge of Tokyo, where the city slowly turns into mountains.",
      zh: "来自东京边缘的记录，在那里城市慢慢变成山。",
      ja: "東京の端からの記録。街がゆっくり山へ変わっていく場所。"
    }
  },
  {
    title: { en: "Notes from Otaru", zh: "来自小樽的笔记", ja: "小樽からのメモ" },
    date: "2026-03-28",
    year: "2026",
    monthDay: "Mar 28",
    read: "5 min",
    tags: ["hokkaido", "sea"],
    url: "posts/notes-from-otaru.html",
    excerpt: {
      en: "A canal, a cold wind, and the feeling of walking through an old photograph.",
      zh: "一条运河，一阵冷风，以及走进旧照片里的感觉。",
      ja: "運河、冷たい風、そして古い写真の中を歩いているような感覚。"
    }
  },
  {
    title: { en: "Winter in Hokkaido", zh: "北海道的冬天", ja: "北海道の冬" },
    date: "2025-12-09",
    year: "2025",
    monthDay: "Dec 09",
    read: "7 min",
    tags: ["hokkaido", "winter"],
    url: "posts/winter-in-hokkaido.html",
    excerpt: {
      en: "Snow changes the sound of a place before it changes the view.",
      zh: "雪在改变风景之前，先改变了一个地方的声音。",
      ja: "雪は景色を変える前に、その場所の音を変えます。"
    }
  },
  {
    title: { en: "Hiking alone in Japan", zh: "在日本一个人徒步", ja: "日本でひとりハイキング" },
    date: "2025-11-17",
    year: "2025",
    monthDay: "Nov 17",
    read: "8 min",
    tags: ["hiking", "essay"],
    url: "posts/hiking-alone-in-japan.html",
    excerpt: {
      en: "Why walking alone sometimes feels less lonely than staying in the city.",
      zh: "为什么一个人走路，有时比待在城市里更不孤独。",
      ja: "ひとりで歩くことが、街にいるより孤独ではないと感じる理由。"
    }
  }
];
