---
slug: "/my-first-post"
date: "2019-08-17"
title: "Gatsbyでブログを作った"
---

何かしら情報の残すことのできる場所が欲しくなったため所謂技術系のブログを始めてみました。
(少なくともこの記事の執筆段階ではまだかなり稚拙な出来ですが)

## 使用した技術など

Gatsby と TypeScript を使用しています。  
また、css を生で書くのは苦行なため Emotion と tailwind CSS を採用しています。

業務では

- create-react-app
- TypeScript
- Material-UI
- styled-components

を使用したことがありますが、ブログ作成にはお勉強の目的もあったため、出来るだけ「使用したことはないが前々から気になっていたもの」を優先的に採用しました。  
(結果として、Gatsby が思っていたよりも癖が強い上に様々なライブラリで躓くため少し後悔しています。)

## はまった箇所や大事にした箇所など

### Emotion と tailwind の共存

CSS in JS を使いつつ tailwind を使いたかったため[twin.macro](https://github.com/ben-rogerson/twin.macro)を使用しました。

以下のように書くことで Emotion や styled-components を tailwind と組み合わせることができます。

```typescript
const headerStyle = (theme: Theme) =>
  css([
    tw`flex`,
    tw`items-center`,
    tw`justify-between`,
    tw`flex-wrap`,
    tw`p-3`,
    tw`mb-8`,
    {
      backgroundColor: theme.colors.primary,
    },
  ])
```

便利ではあるのですが tw``内の補完が効かないことや、tailwind の記法の一部がサポートされていないことが少々辛いです。
例えば、tailwind 側の[doc](https://tailwindcss.com/docs/container#responsive-variants)に記載されている`lg:container`というような、container に対して breakpoint の指定はできないようです。

### 記事の見た目

入稿は[gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark)などを用いて markdown で行なっているのですが、その際に見た目を少しでもましにするために tailwind が提供している[tailwind-typography](https://github.com/tailwindlabs/tailwindcss-typography)というプラグインを一部使用しています。
h2 や p タグに勝手にそれっぽいスタイルを当ててくれるありがたい存在です。
ちなみに tailwind-typography から一部のタグを除外したい際には

```javascript:title=tailwind.config.js
  theme: {
    typography: theme => ({
      default: {
        css: [
          {
            pre: false,
            code: false,
            "pre code": false,
            "code::before": false,
            "code::after": false,
          },
        ],
      },
    }),
  },
```

などと書けばなんとかなります。

## おわりに

一応その他にも typescript 対応や syntax highlight 対応など、細かいがんばりは色々ありますが割愛します。
config ファイルとライブラリを触るだけでなんとかなってしまったため、そのうち Gatsby を剥がして自前でいろいろやってみようと思いました。
