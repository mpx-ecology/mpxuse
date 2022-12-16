import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { noop, resolveUnref } from '@mpxjs/mpxuse-shared'
import type { Ref } from '@mpxjs/core'
import mpx, { ref, watch, shallowRef } from '@mpxjs/core'
import { guessSerializerType } from './guess'

export interface Serializer<T> {
  read(raw: string): T
  write(value: T): string
}

export const StorageSerializers: Record<'boolean' | 'object' | 'number' | 'any' | 'string' | 'map' | 'set' | 'date', Serializer<any>> = {
  boolean: {
    read: (v: any) => v === 'true',
    write: (v: any) => String(v)
  },
  object: {
    read: (v: any) => JSON.parse(v),
    write: (v: any) => JSON.stringify(v)
  },
  number: {
    read: (v: any) => Number.parseFloat(v),
    write: (v: any) => String(v)
  },
  any: {
    read: (v: any) => v,
    write: (v: any) => String(v)
  },
  string: {
    read: (v: any) => v,
    write: (v: any) => String(v)
  },
  map: {
    read: (v: any) => new Map(JSON.parse(v)),
    write: (v: any) => JSON.stringify(Array.from((v as Map<any, any>).entries()))
  },
  set: {
    read: (v: any) => new Set(JSON.parse(v)),
    write: (v: any) => JSON.stringify(Array.from(v as Set<any>))
  },
  date: {
    read: (v: any) => new Date(v),
    write: (v: any) => v.toISOString()
  }
}

export interface OptionsKeys<T> extends Object {
  sync?: boolean;
  encrypt?:boolean;
  serializer?: Serializer<T>;
  shallow?: boolean;
  onError?: (error: unknown) => void;
}

const optionsKeys = new Set(['sync', 'serializer', 'onError', 'shallow'])

export function useStorage<T extends(string | number | boolean | object | null)>(key: string, value?: MaybeComputedRef<T>, options: OptionsKeys<T> = {}): Ref<T> {
  let _options = options
  let _value = value
  let _isSet = true
  if (value && typeof value === 'object' && isOptions(value)) {
    _options = value
    _value = undefined
  }
  _isSet = !!_value

  const {
    sync = false,
    serializer,
    onError = noop,
    encrypt = false,
    shallow
  } = _options
  const _rawInit = resolveUnref(_value as any)
  const data = (shallow ? shallowRef : ref)(_rawInit)

  const _type = guessSerializerType(_rawInit)
  const _serializer = serializer ?? StorageSerializers[_type]

  watch(data, val => val ? set(val) : remove())

  function set(val: any) {
    try {
      const _val: any = _serializer.write(resolveUnref(val))
      if (sync) {
        mpx.setStorageSync(key, _val)
      } else {
        mpx.setStorage({
          key,
          data: _val,
          encrypt,
          success() {
            console.log(`异步修改${key}成功!`)
          }
        })
      }
      return _val
    } catch (e) {
      onError(e)
    }
  }

  function get(_key: string) {
    try {
      if (!_key) return onError('get需要一个参数用于获取存储')
      let _val: any
      if (sync) {
        _val = mpx.getStorageSync(key)
        data.value = _serializer.read(_val)
      } else {
        mpx.getStorage({
          key,
          encrypt,
          success(res: WechatMiniprogram.GetStorageSuccessCallbackResult) {
            data.value = _serializer.read(res.data)
          }
        })
      }
    } catch (e) {
      onError(e)
    }
  }

  const remove = () => {
    try {
      if (sync) mpx.removeStorageSync(key)
      else mpx.removeStorage({ key })
    } catch (e) {
      onError(e)
    }
  }

  if (_isSet)
    set(_value)
  else
    get(key)

  return data
}

function isOptions<T extends object>(value: OptionsKeys<T> | MaybeComputedRef<T>) {
  for (const key of Object.keys(value))
    if (!optionsKeys.has(key)) return false
  return true
}
