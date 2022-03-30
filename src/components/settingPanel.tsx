import React from 'react'

interface SettingItemProps {
  data: SettingObject
}

interface SettingPanelProps {
  data: SettingObject[]
}

function SettingItem({ data }: SettingItemProps) {
  return (
    <div>
      <div>{data.displayName}</div>
      <div>
        <input value={data.defaultValue} />
      </div>
    </div>
  )
}

export default function SettingPanel({ data }: SettingPanelProps) {
  console.log(data)
  return (
    <div className="p-4">
      {data.map((item) => (
        <SettingItem data={item} />
      ))}
    </div>
  )
}
