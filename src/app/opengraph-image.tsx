import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vantalo - AI-Powered Marketing for Coaches & Educators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 16,
            display: "flex",
          }}
        >
          Vantalo
          <span style={{ color: "#00d68f" }}>.in</span>
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#00d68f",
            marginBottom: 8,
            display: "flex",
          }}
        >
          AI-Powered Marketing for
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#00d68f",
            marginBottom: 40,
            display: "flex",
          }}
        >
          Coaches & Educators
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#a3a3a3",
            display: "flex",
          }}
        >
          Social Media · Web Development · AI Automation
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 100,
            fontSize: 18,
            color: "#666666",
            display: "flex",
          }}
        >
          vantalo.in
        </div>
      </div>
    ),
    { ...size }
  );
}
