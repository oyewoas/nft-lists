import { oneLine } from 'common-tags'

/**
 * Serif system font stack.
 *
 * Pulled from: https://gist.github.com/don1138/5761014
 */
export const mrSerifFontStack = (preferredFont: string): string =>
  oneLine`
    ${preferredFont},
    Cambria,
    "Hoefler Text",
    Utopia,
    "Liberation Serif",
    "Nimbus Roman No9 L Regular",
    Times,
    "Times New Roman",
    serif`

/**
 * Stack of system sans serif fonts from:
 *
 * https://css-tricks.com/snippets/css/system-font-stack/
 *
 * Takes the preferred font and then adds all the various platform system fonts
 * as fallbacks.
 */
export const mrSansSerifFontStack = (preferredFont: string): string => oneLine`
  ${preferredFont},
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "Roboto",
  "Oxygen", 
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  sans-serif,
  system-ui`
