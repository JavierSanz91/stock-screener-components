# stock-screener-components

React/TypeScript component library for financial data visualization. Built with Tailwind CSS.

## Components

### ScoreBadge
Displays a color-coded score (0-100) with automatic color grading: green (70+), yellow (55+), orange (25+), red (<25).

```tsx
import { ScoreBadge } from '@valuemarkers/stock-screener-components'

<ScoreBadge score={82} label="VMCI" size="lg" />
```

### MetricCard
Displays a financial metric with label, value, unit, and optional tooltip.

```tsx
<MetricCard
  label="P/E TTM"
  value={18.5}
  unit="x"
  tooltip="Price-to-earnings ratio using trailing twelve months earnings"
/>
```

### PillarGauge
Five-pillar radar/gauge showing Value, Quality, Integrity, Growth, and Risk scores.

```tsx
<PillarGauge
  scores={{ value: 75, quality: 82, integrity: 90, growth: 45, risk: 60 }}
/>
```

### TripleCheck
Displays Piotroski F-Score, Altman Z-Score, and Beneish M-Score with pass/fail indicators.

```tsx
<TripleCheck
  piotroski={8}
  altman={3.5}
  beneish={-2.4}
/>
```

### FilterBuilder
Interactive stock screener filter interface with AND/OR group logic.

```tsx
<FilterBuilder
  indicators={INDICATOR_LIST}
  onFilterChange={(filters) => handleSearch(filters)}
/>
```

### SensitivityTable
DCF sensitivity analysis heatmap showing intrinsic value across growth rate and WACC combinations.

```tsx
<SensitivityTable
  baseCase={{ fcf: 5e9, shares: 4e9, netDebt: 20e9 }}
  growthRates={[0.05, 0.08, 0.10, 0.12]}
  waccs={[0.08, 0.09, 0.10, 0.11, 0.12]}
/>
```

## Installation

```bash
npm install @valuemarkers/stock-screener-components
```

## Design System

- **Brand color**: Emerald (#10b981)
- **Score colors**: Green (70+), Yellow (55+), Orange (25+), Red (<25)
- **Fonts**: Inter/DM Sans (body), Playfair Display (headings), JetBrains Mono (numbers)
- **Built with**: Tailwind CSS, React 18, TypeScript

## License

MIT License - see [LICENSE](LICENSE) for details.

## About

Built by [Javier Sanz](https://valuemarkers.com/about/javier-sanz), founder of [ValueMarkers](https://valuemarkers.com) - a glass-box stock analysis platform for value investors.
