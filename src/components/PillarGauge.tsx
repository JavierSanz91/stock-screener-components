import React from 'react'
import { ScoreBadge } from './ScoreBadge'
import type { PillarScores } from '../types'

/**
 * Five-pillar score display for the VMCI scoring system.
 * Value (35%), Quality (30%), Integrity (15%), Growth (12%), Risk (8%).
 */
export function PillarGauge({ scores }: { scores: PillarScores }) {
  const pillars = [
    { key: 'value', label: 'Value', weight: '35%', score: scores.value },
    { key: 'quality', label: 'Quality', weight: '30%', score: scores.quality },
    { key: 'integrity', label: 'Integrity', weight: '15%', score: scores.integrity },
    { key: 'growth', label: 'Growth', weight: '12%', score: scores.growth },
    { key: 'risk', label: 'Risk', weight: '8%', score: scores.risk },
  ]

  const composite = Math.round(
    scores.value * 0.35 +
    scores.quality * 0.30 +
    scores.integrity * 0.15 +
    scores.growth * 0.12 +
    scores.risk * 0.08
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">VMCI Composite</h3>
        <ScoreBadge score={composite} label="VMCI" size="lg" />
      </div>
      <div className="space-y-2">
        {pillars.map((p) => (
          <div key={p.key} className="flex items-center gap-3">
            <div className="w-20 text-xs text-gray-500">{p.label} ({p.weight})</div>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${p.score}%`, backgroundColor: p.score >= 70 ? '#10b981' : p.score >= 55 ? '#f59e0b' : p.score >= 25 ? '#f97316' : '#ef4444' }} />
            </div>
            <div className="w-8 text-right text-xs font-mono font-semibold">{p.score}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
