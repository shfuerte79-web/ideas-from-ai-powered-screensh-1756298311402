import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Screenshot Companion",
    "one_liner": "Transform your screenshots into interactive notes and reminders.",
    "why_now": "With the rise in remote work, effective digital organization tools are in demand.",
    "novel_mechanism": "Leverages contextual AI to automatically categorize and tag captured text.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision",
      "Agents"
    ],
    "edge_use_cases": [
      "Students can capture lecture slides and receive study cards.",
      "Professionals can turn meeting notes into task lists."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Screenshot capture",
        "Text conversion",
        "Task reminder creation"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Pushbullet API",
        "n8n"
      ],
      "data_bootstrap": [
        "public dataset of common screen texts",
        "synthetic data for categorization"
      ],
      "risk": [
        "user privacy concerns",
        "text extraction accuracy"
      ],
      "mitigation": [
        "implement user consent features",
        "improve with training datasets"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Before-and-after organizational demo",
        "Real-time reminders"
      ],
      "channels": [
        "ProductHunt",
        "X",
        "LinkedIn"
      ],
      "pricing": {
        "free": "Basic unlimited screenshots with ads",
        "pro": "Premium with no ads and customization features",
        "business": "Team features with collaborative functionalities"
      }
    },
    "moat": [
      "distribution lock through partnerships with productivity tools",
      "data-driven insights",
      "integrations with popular task managers"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 8,
      "defensibility": 7
    },
    "total_score": 30,
    "reasoning": "Unlike typical OCR tools, this idea offers an interactive and integrated approach that enhances productivity rather than merely extracting text."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}