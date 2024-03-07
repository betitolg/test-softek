/* eslint-disable @typescript-eslint/no-explicit-any */
const Environment = {
  int: (envVar: string | undefined, defaultValue = 0): number => {
    if (envVar === undefined) return defaultValue
    // eslint-disable-next-line radix
    return parseInt(envVar)
  },
  float: (envVar: string | undefined, defaultValue = 0): number => {
    if (envVar === undefined) return defaultValue
    return parseFloat(envVar)
  },
  string: (envVar: string | undefined, defaultValue = ''): string => {
    if (envVar === undefined) return defaultValue
    return envVar
  },
  array: <T = any>(
    envVar: string | undefined,
    defaultValue: T[] = []
  ): Array<T> => {
    if (envVar === undefined) return defaultValue
    return JSON.parse(envVar)
  },
  object: <T = any>(envVar: string | undefined, defaultValue: T): T => {
    if (envVar === undefined) return defaultValue
    return JSON.parse(envVar)
  },
  bool: (envVar: string | undefined, defaultValue = false): boolean => {
    if (envVar === undefined) return defaultValue
    // eslint-disable-next-line radix
    if (envVar === '1' || envVar === '0') return !!parseInt(envVar)
    return JSON.parse(envVar)
  },
}
export default Environment
