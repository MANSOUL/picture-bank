import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

interface SettingItemProps {
  data: SettingObjectWithField
}

interface SettingPanelProps {
  data: SettingObjectWithField[]
  onApply(data: { [k: string]: string }): void
}

interface SettingItemRefObject {
  validate(): boolean
  getValue(): [string, string]
}

function SettingItem({ data }: SettingItemProps, ref: any) {
  const [value, setValue] = useState(data.value || '')
  const [isWarn, setIsWarn] = useState(false)

  useImperativeHandle(
    ref,
    () => ({
      validate() {
        if (data.required && !value) {
          setIsWarn(true)
          return false
        }
        setIsWarn(false)
        return true
      },
      getValue() {
        return [data.key, value]
      }
    }),
    [value]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setIsWarn(false)
    setValue(e.target.value.trim())
  }

  const className = `flex items-center py-5 ${isWarn ? 'text-red-600' : 'text-slate-600'} border-b ${
    isWarn ? 'border-red-400' : 'border-slate-200'
  }`

  return (
    <div className={className}>
      <div className="w-28 shrink-0 text-sm">
        {data.displayName}
        {data.required ? <sup>*</sup> : null}
      </div>
      <div className="grow">
        {data.type === 'select' ? (
          <select className="bg-transparent" onChange={handleChange}>
            {data.options.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        ) : (
          <input
            className="w-full bg-transparent outline-0 text-sm"
            placeholder={data.placeholder ? data.placeholder : `请输入${data.displayName}`}
            onChange={handleChange}
            value={value}
          />
        )}
      </div>
    </div>
  )
}

const SettingItemWithRef = forwardRef(SettingItem)

export default function SettingPanel({ data, onApply }: SettingPanelProps) {
  const refs = useRef<SettingItemRefObject[]>([])

  const handleRef = (ref: SettingItemRefObject, index: number) => {
    if (ref) {
      refs.current[index] = ref
    }
  }

  const handleApply = () => {
    const isValidate = refs.current
      .map((ref) => {
        return ref.validate()
      })
      .every((isPass) => isPass)
    if (isValidate) {
      const obj = new Map<string, string>()
      refs.current.forEach((ref) => {
        const refValue = ref.getValue()
        const [key, value] = refValue
        obj.set(key, value)
      })
      const settingData = Object.fromEntries(obj.entries())
      onApply(settingData)
    }
  }

  return (
    <div className="p-6 pt-0">
      <div className="">
        {data.map((item, index) => (
          <SettingItemWithRef key={item.key} ref={(ref: SettingItemRefObject) => handleRef(ref, index)} data={item} />
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        {data.length ? (
          <button
            onClick={handleApply}
            className="bg-indigo-500 hover:bg-indigo-600 active:translate-y-0.5 text-sm text-white rounded-sm px-4 py-1.5 shadow-lg shadow-indigo-500/50"
          >
            应用
          </button>
        ) : null}
      </div>
    </div>
  )
}
