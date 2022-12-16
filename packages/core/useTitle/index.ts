import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { isString, resolveRef } from '@mpxjs/mpxuse-shared'
import type { WritableComputedRef } from '@mpxjs/core'
import mpx, { watch } from '@mpxjs/core'

/**
 * Reactive document title.
 *
 * @see https://mpxuse.cn/useTitle
 * @param newTitle
 * @param options
 */
export function useTitle(
  newTitle: MaybeComputedRef<string | null | undefined> = null
) {
  const title: WritableComputedRef<string | null | undefined> = resolveRef(newTitle ?? '')

  watch(
    title,
    (t, o) => {
      if (t !== o && mpx?.setNavigationBarTitle) {
        try {
          mpx.setNavigationBarTitle({
            title: isString(t) ? t : ''
          })
        } catch (error) {
          console.log(error)
        }
      }
    },
    { immediate: true }
  )

  return title
}

export type UseTitleReturn = ReturnType<typeof useTitle>
