Пользователь не хочет отдельный example-проект, но просит четкую инструкцию, что писать в другом проекте. Сейчас в README есть разделы, но они разбросаны. План: собрать один краткий, готовый к копированию раздел "Quick start in a consumer project" прямо в README.

Что сделать:

1. **Открыть `README.md`** — перенести/дополнить существующие разделы Install + Wire up + Use в один блок "Quick start".

2. **Добавить copy-paste ready файлы:**
   - `package.json` — зависимости `@alex-oden/ui`, `react`, `react-dom`, `tailwindcss`.
   - `src/styles.css` — `@import "tailwindcss"`, `@import "@alex-oden/ui/tokens.css"`, `@source "../node_modules/@alex-oden/ui/dist"`.
   - `src/App.tsx` — пример с `Button`, `Card`, `Field`, `Input` и `cn`.
   - `index.html` — `<link>` для Google Fonts `Geist` + `Geist Mono`.

3. **Оставить альтернативу `styles.css` вместо `tokens.css`** — одной строкой отметить, когда использовать полный бандл.

4. **Сохранить существующий компонентный таблицу и токены** — не удалять, только добавить раздел выше.

5. **Проверить, что все версийные упоминания используют `APP_VERSION`** — уже настроено в `src/lib/version.ts`, в README версии пишутся текстом, их трогать не нужно.

Результат: пользователь сможет скопировать 4 блока из README и получить рабочий проект-потребитель без отдельного example-репо.

Технические детали:
- Без изменений в `package.json`, `vite.lib.config.ts`, workflow.
- Только документация, zero risk для публикации пакета.
- Не создаем `examples/` — по ответу пользователя это не требуется.