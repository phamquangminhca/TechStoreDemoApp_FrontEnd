import { useState } from "react";
import {BsSearch} from 'react-icons/bs'
import React from 'react'
import { Input} from 'antd';

const { Search } = Input;

function ItemSearch() {

  const [text, setText] = useState('')

  const onSearch = async (e) => {

  }

  // const handleChange = (e) => {
  //   setText(e.target.value)
  // }

  return (
    <div>
      {/* <form onSubmit={handleSubmit} className='searchHeader'>
        <input type='text' placeholder="Enter item's name..." value={text} onChange={handleChange} />
        <button type="submit"><BsSearch /></button>
      </form> */}

      <Search placeholder="Enter item's name..." onSearch={onSearch}  size="large" className="searchHeader" />

    </div>
  )
}

export default ItemSearch
