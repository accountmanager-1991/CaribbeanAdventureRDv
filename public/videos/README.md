# Tour videos

Drop `.mp4` files in this folder, then register each one in
[`src/data/gallery.ts`](../../src/data/gallery.ts) under `galleryVideos`:

```ts
export const galleryVideos: GalleryVideo[] = [
  {
    src: "catamaran.mp4",        // this folder
    poster: "tour-25.jpg",       // a still frame from /public/images
    title: {
      en: "Sunset catamaran cruise",
      es: "Crucero en catamarán al atardecer",
    },
  },
];
```

The **Tour Videos** section appears on `/gallery` automatically once the array
has at least one entry. While it is empty the section does not render at all,
so the live site never shows an empty placeholder.

## Before you add a file

These videos are served straight from `/public` with **no transcoding or
optimisation** — unlike the photos, which Next.js resizes on the fly. Whatever
you commit is exactly what every visitor downloads.

- **Keep each file under ~10 MB.** A raw phone video is often 50–150 MB, which
  is a very slow page on Dominican mobile data.
- **1080p or 720p is plenty.** 4K is wasted on a web player.
- **Always set a `poster`.** The player shows it before playback, and
  `preload="none"` means nothing downloads until the visitor presses play.

To compress a phone video to a reasonable web size with ffmpeg:

```bash
ffmpeg -i input.mp4 -vf "scale='min(1280,iw)':-2" -c:v libx264 -crf 28 \
  -preset slow -c:a aac -b:a 128k -movflags +faststart output.mp4
```

`-movflags +faststart` matters: without it the browser must download the whole
file before the first frame appears.

## If the videos get large

Self-hosting stops making sense past a few files. At that point move them to
YouTube or Vimeo and switch `VideoGallery.tsx` to an iframe embed — it costs
nothing in bandwidth, though viewers then see platform branding.
