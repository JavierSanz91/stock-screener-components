import React from 'react'
import { formatNumber } from '../utils'
import type { MetricCardProps } from '../types'

/**
 * Financial metric display card with label, value, and unit.
 */
export function MetricCard({ label, value, unit, tooltip, isLocked }: MetricCardProps) {
  if (isLocked) {
    return (
      <div className="rounded-lg border border-gray-200 p-3 opacity-60">
        <div className="text-xs text-gray-500">{label}</div>
        <div className="mt-1 text-sm text-gray-400">Analyst+</div>
      </div>
    )
  }

  const formatted = value !== null
    ? unit === '%' ? (value * 100).toFixed(2) + '%'
    : unit === 'x' ? value.toFixed(2) + 'x'
    : unit === '/9' ? value + '/9'
    : unit === 'days' ? Math.round(value) + 'd'
    : unit === '$' ? '$' + formatNumber(value)
    : formatNumber(value)
    : 'N/A'

  return (
    <div className="rounded-lg border border-gray-200 p-3 hover:border-emerald-300 transition-colors" title={tooltip}>
      <div className="text-xs text-gray-500 truncate">{label}</div>
      <div className="mt-1 text-lg font-mono font-semibold text-gray-900">{formatted}</div>
    </div>
  )
}
