import React from 'react'
import { scoreColor, formatNumber } from '../utils'
import type { SensitivityTableProps } from '../types'

/**
 * DCF sensitivity analysis table.
 * Shows intrinsic value per share across growth rate and WACC combinations.
 */
export function SensitivityTable({
  baseCase,
  growthRates,
  waccs,
  terminalGrowth = 0.03,
  years = 10,
}: SensitivityTableProps) {
  function dcfValue(growthRate: number, wacc: number): number {
    let fcf = baseCase.fcf
    let pvSum = 0
    for (let y = 1; y <= years; y++) {
      fcf *= (1 + growthRate)
      pvSum += fcf / Math.pow(1 + wacc, y)
    }
    const terminalFcf = fcf * (1 + terminalGrowth)
    const terminalValue = terminalFcf / (wacc - terminalGrowth)
    const pvTerminal = terminalValue / Math.pow(1 + wacc, years)
    const ev = pvSum + pvTerminal
    return (ev - baseCase.netDebt) / baseCase.shares
  }

  return (
    <div className="overflow-x-auto">
      <table className="text-sm border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-xs text-gray-500">Growth / WACC</th>
            {waccs.map((w) => (
              <th key={w} className="p-2 text-xs text-gray-500 text-right">
                {(w * 100).toFixed(0)}%
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {growthRates.map((gr) => (
            <tr key={gr}>
              <td className="p-2 text-xs font-medium text-gray-600">
                {(gr * 100).toFixed(0)}%
              </td>
              {waccs.map((w) => {
                const val = dcfValue(gr, w)
                return (
                  <td key={w} className="p-2 text-right font-mono text-xs">
                    ${val.toFixed(2)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
