import { ImageResponse } from "next/og";

export const alt =
  "Caribbean Adventure RD — curated adventure tours in Puerto Plata, Dominican Republic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same mark as src/app/icon.svg, inlined as a data URI. Satori renders <img>
// data URIs reliably, which is safer than depending on its partial SVG support.
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<defs>
<linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb703"/><stop offset="1" stop-color="#f77f00"/></linearGradient>
</defs>
<circle cx="256" cy="212" r="92" fill="url(#s)"/>
<g fill="none" stroke="#ffffff" stroke-width="34" stroke-linecap="round">
<path d="M74 356c30-26 60-26 91 0s60 26 91 0 60-26 91 0 60 26 91 0"/>
<path d="M74 434c30-26 60-26 91 0s60 26 91 0 60-26 91 0 60 26 91 0"/>
</g></svg>`;

export default function OpenGraphImage() {
  const mark = `data:image/svg+xml;base64,${Buffer.from(MARK).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "linear-gradient(135deg, #0077b6 0%, #005f8a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark} width={150} height={150} alt="" />

        <div
          style={{
            display: "flex",
            fontSize: 74,
            fontWeight: 700,
            marginTop: 28,
            lineHeight: 1.1,
          }}
        >
          Caribbean Adventure RD
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 20,
            color: "#caf0f8",
            maxWidth: 900,
          }}
        >
          Curated adventure tours with local guides in Puerto Plata, Dominican
          Republic
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 40,
            fontSize: 28,
            color: "#ffb703",
            fontWeight: 600,
          }}
        >
          caribbeanadventurerd.com
        </div>
      </div>
    ),
    { ...size }
  );
}
