import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "VoiceLog — Auto-transcribe Discord Voice Channels",
  description: "Searchable transcripts of Discord voice meetings and gaming sessions for teams and community managers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a9714600-96c5-4017-8d19-2b9a50178260"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  )
}
