import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export const alt = "Auren Store"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 50% 25%, #1f1f1f 0%, #0a0a0a 65%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Logo mark: rounded square with the Auren "A" */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            borderRadius: 36,
            background: "#ffffff",
            color: "#0a0a0a",
            fontSize: 88,
            fontWeight: 700,
          }}
        >
          A
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: 24,
              textTransform: "uppercase",
              paddingLeft: 24,
            }}
          >
            Auren
          </div>
          <div
            style={{
              width: 320,
              height: 1,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 400,
              letterSpacing: 8,
              color: "rgba(255, 255, 255, 0.6)",
              textTransform: "uppercase",
              paddingLeft: 8,
            }}
          >
            Auren Store
          </div>
        </div>

        {/* Credit */}
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: 32,
            display: "flex",
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.45)",
          }}
        >
          by Bilolidin
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
