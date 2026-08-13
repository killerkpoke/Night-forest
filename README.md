# Astro Sienna

A minimal Astro blog


### Per-post OG images

Every post gets its own 1200×630 OG image generated at build time by [Satori](https://github.com/vercel/satori). The
markup lives in `src/pages/og-image/[...slug].png.ts`. Tweak it once and every post's card updates on the next build. To
skip the generated image and point a post at your own, set `ogImage: "/path/to/image.png"` in the post's frontmatter.

## Writing posts

Posts live in `src/content/post/` as `.md` or `.mdx` files. The filename becomes the slug.

```yaml
---
title: "Your post title"
publishDate: 2026-01-12
description: "One-sentence summary used in cards, social previews, and meta tags."
tags: [ tag-one, tag-two ]
# updatedDate: 2026-02-01     # optional, shown as "Updated …"
# draft: true                  # excludes the post from production builds
# coverImage:
#   src: ./_assets/cover.png
#   alt: "Description for screen readers"
---
```

## Pulling theme updates

To keep tracking upstream changes after you've forked, add this repo as a second remote:

```sh
git remote add theme https://github.com/anjay-goel/astro-sienna.git
git fetch theme
git merge theme/main --allow-unrelated-histories
```


## Credits

Cloned from [astro-sienna](https://github.com/anjay-goel/astro-sienna) by [Anjay Goel](https://github.com/anjay-goel), huge thanks to created this theme!

## License

[MIT](./LICENSE).
