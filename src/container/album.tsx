/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 17:52:28
 * @Description: file content
 */
import { useLiveQuery } from 'dexie-react-hooks'
import React from 'react'
import Empty from '../components/empty'
import PictureItem from '../components/pictureItem'
import { db } from '../db'

export default function Album() {
  const pictures = useLiveQuery(() => db.pictures.toArray())

  return (
    <div className="p-6 px-3 w-full h-full overflow-scroll">
      <div className="flex flex-wrap">
        {pictures && pictures.length
          ? pictures.map((item) => (
              <div className="mx-3 mb-6">
                <PictureItem key={item.id} data={item} />
              </div>
            ))
          : null}
      </div>
      {!pictures || !pictures.length ? (
        <div className="flex pb-20 justify-center items-center w-full h-full">
          <Empty />
        </div>
      ) : null}
    </div>
  )
}
