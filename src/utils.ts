/**
 * Score color utilities for financial data visualization.
 * Green (70+), Yellow (55+), Orange (25+), Red (<25)
 */

export function scoreColor(score: number): string {
  if (score >= 70) return '#10b981' // emerald-500
  if (score >= 55) return '#f59e0b' // amber-500
  if (score >= 25) return '#f97316' // orange-500
  return '#ef4444'                   // red-500
}

export function scoreBg(score: number): string {
  if (score >= 70) return 'bg-emerald-50 text-emerald-700'
  if (score >= 55) return 'bg-amber-50 text-amber-700'
  if (score >= 25) return 'bg-orange-50 text-orange-700'
  return 'bg-red-50 text-red-700'
}

export function piotroskiColor(score: number): string {
  if (score >= 7) return '#10b981'
  if (score >= 4) return '#f59e0b'
  return '#ef4444'
}

export function altmanColor(z: number): string {
  if (z > 2.99) return '#10b981' // Safe
  if (z > 1.81) return '#f59e0b' // Grey
  return '#ef4444'                // Distress
}

export function beneishColor(m: number): string {
  return m < -1.78 ? '#10b981' : '#ef4444'
}

export function formatNumber(n: number | null, decimals = 2): string {
  if (n === null || n === undefined) return 'N/A'
  if (Math.abs(n) >= 1e12) return (n / 1e12).toFixed(1) + 'T'
  if (Math.abs(n) >= 1e9) return (n / 1e9).toFixed(1) + 'B'
  if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(1) + 'M'
  if (Math.abs(n) >= 1e3) return (n / 1e3).toFixed(1) + 'K'
  return n.toFixed(decimals)
}

export function formatPct(n: number | null): string {
  if (n === null || n === undefined) return 'N/A'
  return (n * 100).toFixed(2) + '%'
}
