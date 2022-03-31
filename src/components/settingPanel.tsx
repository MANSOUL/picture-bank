import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

interface SettingItemProps {
  data: SettingObject
}

interface SettingPanelProps {
  data: SettingObject[]
}

interface SettingItemRefObject {
  validate(): boolean
}

function SettingItem({ data }: SettingItemProps, ref: any) {
  const [value, setValue] = useState(data.defaultValue)

  useImperativeHandle(ref, () => ({
    validate() {
      console.log('validate')
      return false
    }
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="flex items-center py-5 text-slate-600 border-b border-slate-200">
      <div className="w-24 shrink-0 text-sm">
        {data.displayName}
        {data.required ? <sup>*</sup> : null}
      </div>
      <div className="grow">
        <input
          className="w-full bg-transparent outline-0 text-sm"
          placeholder={data.placeholder ? data.placeholder : `请输入${data.displayName}`}
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  )
}

const SettingItemWithRef = forwardRef(SettingItem)

export default function SettingPanel({ data }: SettingPanelProps) {
  const refs = useRef<SettingItemRefObject[]>([])

  const handleApply = () => {
    console.log(refs.current.map((ref) => ref.validate()))
  }

  return (
    <div className="p-6 pt-0">
      <div className="">
        {data.map((item) => (
          <SettingItemWithRef key={item.key} ref={(ref: SettingItemRefObject) => refs.current.push(ref)} data={item} />
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <button
          onClick={handleApply}
          className="bg-indigo-500 hover:bg-indigo-600 active:translate-y-0.5 text-sm text-white rounded-sm px-4 py-1.5 shadow-lg shadow-indigo-500/50"
        >
          应用
        </button>
      </div>
    </div>
  )
}
