/*
 * @Author: kuanggf
 * @Date: 2022-03-12 18:28:32
 * @LastEditors: kuanggf
 * @LastEditTime: 2022-03-25 15:09:38
 * @Description: file content
 */
import { useLiveQuery } from 'dexie-react-hooks'
import React from 'react'
import Empty from '../components/empty'
import PictureItem from '../components/pictureItem'
import { db } from '../db'

export default function Album() {
  let pictures = useLiveQuery(() => db.pictures.toArray())
  pictures = []
  return (
    <div className="p-6 w-full h-full">
      <div className="flex">
        {pictures && pictures.length ? pictures.map((item) => <PictureItem data={item} />) : null}
      </div>
      {!pictures || !pictures.length ? (
        <div className="flex justify-center items-center w-full h-full">
          <Empty />
        </div>
      ) : null}
    </div>
  )
}
