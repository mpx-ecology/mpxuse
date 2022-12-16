type PackageManifest = {
  external?: string[];
  addon?: boolean;
  utils?: boolean;
  name: string;
  display: string;
  cjs?: boolean;
  mjs?: boolean;
  dts?: boolean;
  manualImport?: boolean;
}

export const packages: PackageManifest[] = [
  {
    name: 'core',
    display: '核心方法'
  },
  {
    name: 'math',
    display: 'Math'
  },
  {
    name: 'shared',
    display: '公用方法'
  },
  {
    name: 'metadata',
    display: '元数据',
    utils: true,
    manualImport: true
  }
]
