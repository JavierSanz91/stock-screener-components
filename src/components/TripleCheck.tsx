import React from 'react'
import { piotroskiColor, altmanColor, beneishColor } from '../utils'
import type { TripleCheckProps } from '../types'

/**
 * Quality Triple Check: Piotroski F-Score + Altman Z-Score + Beneish M-Score.
 * Three academic models for comprehensive financial health assessment.
 */
export function TripleCheck({ piotroski, altman, beneish }: TripleCheckProps) {
  const checks = [
    {
      name: 'Piotroski F-Score',
      value: `${piotroski}/9`,
      color: piotroskiColor(piotroski),
      verdict: piotroski >= 7 ? 'Strong' : piotroski >= 4 ? 'Moderate' : 'Weak',
      description: 'Financial strength (9 criteria)',
    },
    {
      name: 'Altman Z-Score',
      value: altman.toFixed(2),
      color: altmanColor(altman),
      verdict: altman > 2.99 ? 'Safe' : altman > 1.81 ? 'Grey Zone' : 'Distress',
      description: 'Bankruptcy risk prediction',
    },
    {
      name: 'Beneish M-Score',
      value: beneish.toFixed(2),
      color: beneishColor(beneish),
      verdict: beneish < -1.78 ? 'Clean' : 'Flag',
      description: 'Earnings manipulation detection',
    },
  ]

  const allPass = piotroski >= 6 && altman > 1.81 && beneish < -1.78

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Quality Triple Check</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full ${allPass ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
          {allPass ? 'PASS' : 'REVIEW'}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {checks.map((check) => (
          <div key={check.name} className="rounded-lg border p-3" style={{ borderLeftColor: check.color, borderLeftWidth: 3 }}>
            <div className="text-xs text-gray-500">{check.name}</div>
            <div className="text-lg font-mono font-bold" style={{ color: check.color }}>{check.value}</div>
            <div className="text-xs mt-1" style={{ color: check.color }}>{check.verdict}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
