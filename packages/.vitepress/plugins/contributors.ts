import type { Plugin } from 'vite'

const ID = '/virtual-contributors'

export function Contributors(data: any): Plugin {
  return {
    name: 'mpxuse-contributors',
    resolveId(id) {
      return id === ID ? ID : null
    },
    load(id) {
      if (id !== ID)
        return null
      return `export default ${JSON.stringify(data)}`
    }
  }
}
