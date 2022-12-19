import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { resolveUnref } from '@mpxjs/mpxuse-shared'
import type { ComputedRef } from '@mpxjs/core'
import mpx, { ref } from '@mpxjs/core'

export interface UseClipboardOptions<Source> {
  /**
   * Copy source
   */
  source?: Source

  /**
   * Milliseconds to reset state of `copied` ref
   *
   * @default 1500
   */
  copiedDuring?: number
}

export interface UseClipboardReturn<Optional> {
  text: ComputedRef<string>
  copied: ComputedRef<boolean>
  copy: Optional extends true ? (text?: string) => Promise<void> : (text: string) => Promise<void>
  flush: Optional extends true ? (text?: string) => Promise<void> : (text: string) => Promise<void>
}

/**
 * Reactive Clipboard API.
 *
 * @see https://mpxuse.cn/useClipboard
 * @param options
 */
export function useClipboard(options?: UseClipboardOptions<undefined>): UseClipboardReturn<false>
export function useClipboard(options: UseClipboardOptions<MaybeComputedRef<string>>): UseClipboardReturn<true>
export function useClipboard(options: UseClipboardOptions<MaybeComputedRef<string> | undefined> = {}): UseClipboardReturn<boolean> {
  const {
    source,
    copiedDuring = 1500
  } = options

  const text = ref('')
  const copied = ref(false)
  const timeout = () => setTimeout(() => copied.value = false, copiedDuring)

  async function flush() {
    const res = await mpx.getClipboardData()
    text.value = res.data
  }

  async function copy(value = resolveUnref(source)) {
    if (value != null) {
      await wx.setClipboardData({
        data: value
      })
      text.value = value
      copied.value = true
      timeout()
    }
  }

  return {
    text: text as ComputedRef<string>,
    copied: copied as ComputedRef<boolean>,
    copy,
    flush
  }
}
