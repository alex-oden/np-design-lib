## Goal

Заменить единый `Card` с пропом `variant` на набор компонентов с говорящими названиями, чтобы другой агент (или разработчик) сразу понимал, для какого use case какой компонент. Оставить обратную совместимость через `Card` (алиас на `SurfaceCard`).

## Новый набор card-компонентов

Каждый компонент получает свои дефолты (padding, radius, hover, shadow) и свою семантику. Все они переиспользуют общие `CardHeader / CardTitle / CardDescription / CardContent / CardFooter`.

| Компонент | Use case | Внешний вид |
| --- | --- | --- |
| `SurfaceCard` | База: любой контейнер контента, форма, панель настроек | Плоская `bg-card/60`, border, без hover |
| `GlassCard` | Оверлеи, hero-панели поверх градиента, "premium" секции | `glass` + backdrop-blur, `shadow-card` |
| `InteractiveCard` | Кликабельная плитка / ссылка-карточка в сетке | Hover: lift + `shadow-glow`, cursor-pointer, `role="button"` friendly |
| `MetricCard` | KPI/метрика (число + подпись + delta) | Компактный padding, встроенные слоты `label`, `value`, `delta`, `unit`, моно-цифры |
| `StatCard` | Список из 2–4 маленьких метрик в ряд | Grid внутри, каждая ячейка = label + value |
| `FeatureCard` | Маркетинговая фича: иконка + заголовок + описание | Иконочный слот сверху, увеличенный заголовок |
| `MediaCard` | Карточка с изображением/превью сверху | Слот `media` (aspect-ratio), контент снизу |
| `AlertCard` | Инлайновый статус-блок (не toast, а карточка) | Варианты `info / success / warning / danger`, цветной левый край + иконка |
| `GlowCard` | Тонкий wrapper над существующим `BorderGlow` | Готовые пресеты цветов (`brand`, `success`, `danger`, `info`) |

Все — именованные экспорты, forwardRef, `displayName` выставлен, типы экспортированы (`SurfaceCardProps` и т.д.).

## Файлы

**Новые файлы**
- `src/components/ui/surface-card.tsx` — `SurfaceCard` + переезд общих `CardHeader/Title/Description/Content/Footer` сюда.
- `src/components/ui/glass-card.tsx`
- `src/components/ui/interactive-card.tsx`
- `src/components/ui/metric-card.tsx` — с пропами `label`, `value`, `unit`, `delta`, `trend`.
- `src/components/ui/stat-card.tsx` — принимает `items: {label, value, unit?}[]`.
- `src/components/ui/feature-card.tsx` — пропы `icon`, `title`, `description`.
- `src/components/ui/media-card.tsx` — проп `media` (ReactNode) + `aspectRatio`.
- `src/components/ui/alert-card.tsx` — проп `tone`.
- `src/components/ui/glow-card.tsx` — пропы `preset`.

**Изменяемые файлы**
- `src/components/ui/card.tsx` — превращается в backward-compat shim: реэкспорт `SurfaceCard as Card`, `GlassCard`, `InteractiveCard` + все sub-parts. `variant` prop сохраняется и мапится на нужный компонент, чтобы существующий код не сломался.
- `src/index.ts` — добавить экспорты новых файлов.
- `src/routes/_showcase.cards.tsx` — переписать: одна секция на компонент, с описанием use case и живым примером; убрать демо `variant`-переключателя, заменить на явные `<GlassCard>`, `<MetricCard>` и т.д.
- `src/routes/_showcase.index.tsx` — если в списке компонентов есть card summary, добавить новые.
- `src/components/showcase-sidebar.tsx` — проверить пункт "Cards"; если нужно, добавить якоря на подсекции.
- `README.md` — таблица компонентов: добавить новые card-компоненты с одной строкой описания use case, обновить quick start пример (использовать `SurfaceCard` + `MetricCard`).
- `CHANGELOG.md` — секция `1.3.0`: added `SurfaceCard`, `GlassCard`, `InteractiveCard`, `MetricCard`, `StatCard`, `FeatureCard`, `MediaCard`, `AlertCard`, `GlowCard`; deprecated `<Card variant="…">` в пользу именованных компонентов (не удалено).
- `docs/neospower-report.md` — короткий абзац про рестуктуризацию карточек.
- `package.json` — bump `version` → `1.3.0`. Т.к. `APP_VERSION` читается из `package.json`, UI-бейджи обновятся автоматически.

## Обратная совместимость

Существующий код `<Card variant="glass">` продолжает работать: `card.tsx` под капотом отрендерит `GlassCard`. В консоли — `console.warn` в dev-режиме про deprecation, чтобы агенты постепенно переходили на именованные компоненты.

## После сборки

- `bun run build:lib` локально не запускаю (это сделает release workflow).
- Пользователю нужно вручную запушить тег `v1.3.0` в `np-design-lib`, чтобы workflow опубликовал пакет на npm.

## Что НЕ входит в план

- Не трогаю токены/цвета.
- Не переписываю остальные компоненты.
- Не меняю routing / SSR wiring.
