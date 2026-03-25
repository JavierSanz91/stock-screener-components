export interface ScoreBadgeProps {
  score: number
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

export interface MetricCardProps {
  label: string
  value: number | null
  unit: 'x' | '%' | '$' | 'n' | '/9' | 'days'
  tooltip?: string
  isFree?: boolean
  isLocked?: boolean
}

export interface PillarScores {
  value: number
  quality: number
  integrity: number
  growth: number
  risk: number
}

export interface TripleCheckProps {
  piotroski: number   // 0-9
  altman: number      // Z-Score
  beneish: number     // M-Score
}

export interface SensitivityTableProps {
  baseCase: {
    fcf: number
    shares: number
    netDebt: number
  }
  growthRates: number[]
  waccs: number[]
  terminalGrowth?: number
  years?: number
}
