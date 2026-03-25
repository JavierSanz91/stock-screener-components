import React from 'react'
import { scoreColor, scoreBg } from '../utils'
import type { ScoreBadgeProps } from '../types'

/**
 * Color-coded score badge (0-100).
 * Green (70+), Yellow (55+), Orange (25+), Red (<25).
 */
export function ScoreBadge({ score, label, size = 'md' }: ScoreBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-sm px-2 py-1',
    lg: 'text-base px-3 py-1.5 font-semibold',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-mono ${scoreBg(score)} ${sizeClasses[size]}`}
      style={{ borderLeft: `3px solid ${scoreColor(score)}` }}
    >
      {label && <span className="mr-1 opacity-70">{label}</span>}
      {Math.round(score)}
    </span>
  )
}
