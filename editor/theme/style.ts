import { Emotion, ThemeBorder, ThemeFont, ThemeManager, ThemeScrollbar, ThemeShadow, ThemeSize } from '@milkdown/core'
import { getPalette } from '@milkdown/design-system'
import { injectProsemirrorView } from '@milkdown/theme-pack-helper'

export const getStyle = (manager: ThemeManager, emotion: Emotion) => {
  const { injectGlobal, css } = emotion
  const palette = getPalette(manager)
  const radius = manager.get(ThemeSize, 'radius')
  const neutral = palette('neutral')
  const surface = palette('surface')
  const line = palette('line')
  const highlight = palette('primary', 0.5)

  const selection = css`
    .ProseMirror-selectednode {
      outline: ${manager.get(ThemeSize, 'lineWidth')} solid ${line};
    }

    li.ProseMirror-selectednode {
      outline: none;
    }

    li.ProseMirror-selectednode::after {
      ${manager.get(ThemeBorder, undefined)};
    }

    & ::selection {
      background: ${highlight};
    }
  `

  const collaborative = css`
    .ProseMirror-yjs-cursor > div {
      padding: 2px 4px;
      font-family: inherit;
      font-weight: bold;
    }
  `

  const editorLayout = css`
    padding: 3.125em 1.25em;
    outline: none;
    & > * {
      margin: 1.875em 0;
    }
  `

  const paragraph = css`
    p {
      line-height: 1.625;
    }
  `

  const blockquote = css`
    blockquote {
      padding-left: 1.875em;
      line-height: 1.75em;
      border-left: 4px solid ${palette('primary')};
      margin-left: 0;
      margin-right: 0;
      * {
        font-size: 1em;
        line-height: 1.5em;
      }
    }
  `

  const heading = css`
    h1 {
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: -.025em;
      line-height: 1.375;
      margin-bottom: 0.5em;
      margin-top: 1em;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: -.025em;
      line-height: 1.375;
      margin-bottom: 0.5em;
      margin-top: 1.25em;
    }
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      letter-spacing: -.025em;
      line-height: 1.375;
      margin-bottom: 0.5em;
      margin-top: 1.25em;
    }
    h4 {
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: -.025em;
      line-height: 1.375;
      margin-bottom: 0.5em;
      margin-top: 1.25em;
    }
    h5 {
      font-size: inherit;
      font-weight: 600;
      line-height: 1;
    }
    h6 {
      font-size: inherit;
      font-weight: 600;
      line-height: 1;
    }
  `

  const hr = css`
    hr {
      height: ${manager.get(ThemeSize, 'lineWidth')};
      background-color: ${line};
      border-width: 0;
    }
  `

  const list = css`
    .list-item,
    .list-item > * {
      margin: 0.5em 0;
    }

    li {
      &::marker {
        color: ${palette('primary')};
      }
    }

    .task-list-item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      &_checkbox {
        margin: 0.5em 0.5em 0.5em 0;
        height: 1em;
      }
    }
  `

  const code = css`
    .code-fence {
      margin-top: .5rem;
      margin-bottom: .5rem;

      pre {
        font-family: ${manager.get(ThemeFont, 'code')};
        margin: 0 1.2em !important;
        white-space: pre;
        overflow: auto;
        ${manager.get(ThemeScrollbar, ['x'])}

        background-color: ${palette('background')};
        color: ${palette('neutral')};
        font-size: 0.875em;
        border-radius: ${radius};

        code {
          line-height: 1.5;
          font-family: ${manager.get(ThemeFont, 'code')};
        }
      }
    }
  `

  const img = css`
    .image {
      display: inline-block;
      margin: 0 auto;
      object-fit: contain;
      width: 100%;
      position: relative;
      height: auto;
      text-align: center;
    }
  `

  const inline = css`
    .code-inline {
      background-color: ${palette('background')};
      color: ${palette('neutral')};
      border-radius: ${radius};
      font-size: .875rem;
      font-weight: 400;
      line-height: 1.25rem;
      padding: 3px 6px;
    }

    .strong {
      font-weight: 600;
    }

    .link,
    a {
      color: ${palette('primary')};
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      font-weight: 500;
      text-decoration-line: none;
      transition-duration: .15s;
      transition-property: border-color;
      border-bottom-width: 1px;
      border-color: transparent;
      &:hover {
        border-color: ${palette('primary')};
      }
    }

    .strike-through {
      text-decoration-color: ${palette('secondary')};
    }
  `

  const footnote = css`
    .footnote-definition {
      ${manager.get(ThemeBorder, undefined)};
      border-radius: ${manager.get(ThemeSize, 'radius')};
      background-color: ${palette('background')};
      padding: 1em;
      display: flex;
      flex-direction: row;
      & > .footnote-definition_content {
        flex: 1;
        width: calc(100% - 1em);
        & > dd {
          margin-inline-start: 1em;
        }
        & > dt {
          color: ${palette('secondary')};
          font-weight: 500;
        }
      }
      & > .footnote-definition_anchor {
        width: 1em;
      }
    }
  `

  const table = css`
    /* copy from https://github.com/ProseMirror/prosemirror-tables/blob/master/style/tables.css */
    .tableWrapper {
      overflow-x: auto;
      margin: 0;
      ${manager.get(ThemeScrollbar, ['x'])}
      width: 100%;
      * {
        margin: 0;
        box-sizing: border-box;
        font-size: 1em;
      }
    }
    table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;
      overflow: auto;
      border-radius: ${manager.get(ThemeSize, 'radius')};
      p {
        line-height: unset;
      }
    }
    tr {
      ${manager.get(ThemeBorder, 'bottom')};
    }
    td,
    th {
      padding: 0 1em;
      vertical-align: top;
      box-sizing: border-box;
      position: relative;

      min-width: 100px;
      ${manager.get(ThemeBorder, undefined)};
      text-align: left;
      line-height: 3;
      height: 3em;
    }
    th {
      background: ${palette('background', 0.5)};
      font-weight: 400;
    }
    .column-resize-handle {
      position: absolute;
      right: -2px;
      top: 0;
      bottom: 0;
      z-index: 20;
      pointer-events: none;
      background: ${palette('secondary')};
      width: ${manager.get(ThemeSize, 'lineWidth')};
    }
    .resize-cursor {
      cursor: ew-resize;
      cursor: col-resize;
    }

    .selectedCell {
      &::after {
        z-index: 2;
        position: absolute;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: ${palette('secondary', 0.38)};
        pointer-events: none;
      }

      & ::selection {
        background: transparent;
      }
    }
  `

  injectProsemirrorView(emotion)

  injectGlobal`
    .milkdown {
      .material-icons-outlined {
        font-size: 1.5em;
      }

      position: relative;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;


      color: ${neutral};
      background: ${surface};
      font-family: ${manager.get(ThemeFont, 'typography')};

      ${manager.get(ThemeShadow, undefined)}
      ${manager.get(ThemeScrollbar, undefined)}
      ${selection};
      ${collaborative};

      .editor {
        ${editorLayout};

        ${paragraph};
        ${heading};
        ${blockquote};
        ${hr};
        ${list};
        ${code};
        ${img};

        ${table};
        ${footnote};

        ${inline};
      }
    }
  `
}
