# TokyoLab v5.7 — Jekyll Markdown Blog

This version removes the hidden `.github` workflow problem.

You only upload normal visible folders and files. GitHub Pages uses Jekyll automatically.

## Write posts

Put Markdown files in:

```text
_posts/
```

Filename format:

```text
2026-05-01-my-new-post.md
```

Frontmatter:

```md
---
title: 中文标题
title_en: English Title
title_ja: 日本語タイトル
date: 2026-05-01
tags: [hiking, japan]
excerpt: 中文摘要
excerpt_en: English summary
excerpt_ja: 日本語の概要
read: 5 min
---

正文从这里开始。

## 大章节
### 小章节
#### 更小章节
```

GitHub Pages will automatically generate real article pages.

## Catalog

Article pages automatically create a right-side Catalog from:

```text
## / ### / ####
```

Desktop: shows right-side Catalog.  
Mobile: hides Catalog.

## Photos

Put images in:

```text
assets/photos/gallery/
```

Photos page will read files from this folder through Jekyll.

Recommended image names:

```text
2026-05-01_nikko-lake-mountain.jpg
2026-05-03_kamakura-sea.jpg
```

## Important

Do not add `.nojekyll`.  
This version needs Jekyll.

No GitHub Actions are required.


## v5.8 Article CSS Fix

Fixed the Jekyll post layout so article pages load CSS and JS through relative paths:

```text
../assets/css/style.css
../assets/js/main.js
```

This prevents article pages from rendering as raw unstyled HTML on GitHub Pages project URLs.
