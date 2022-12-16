import _metadata, { categories as _categories, functions as _functions, packages as _packages } from '../index.json'
import type { PackageIndexes } from './types'
export const metadata = _metadata as PackageIndexes
export const categories = _categories as PackageIndexes['categories']
const categoriesOrder = [
  'State',
  'Elements',
  'Browser',
  'Sensors',
  'Network',
  'Animation',
  'Component',
  'Watch',
  'Reactivity',
  'Array',
  'Time',
  'Utilities'
]

export const categoryNames = Array.from(categories)
  .sort((a, b) => categoriesOrder.indexOf(a) - categoriesOrder.indexOf(b))
  .sort((a, b) => a.startsWith('@') ? 1 : b.startsWith('@') ? -1 : 0)
export const coreCategoryNames = categoryNames
  .filter(f => !f.startsWith('@'))
export const functions = _functions as PackageIndexes['functions']
export const getFunction = (name: string) => metadata.functions.find(f => f.name === name)
export const functionNames = functions.map(f => f.name)