import React , { FC, useMemo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash'
import { removeKeyword,addKeyword } from '@modules/keyWordReducer';
import { searchKeyword } from '@/modules/api';
const KeyInput : FC = () =>{
  const [inputKeyword, setInputKeyword] = useState<string>('');
  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    debounceSearch(e.target.value);
  }

 useEffect(() => {
  if(inputKeyword !== ''){

    const result = new Promise((resolve, reject) => { const res = searchKeyword(inputKeyword);
      resolve(console.log(res))
    })
    console.log(result);
    
  }
  
 },[inputKeyword])

  const debounceSearch = useMemo(()=> debounce((keyword) => {
    setInputKeyword(()=> keyword);
    console.log('debounce value : ',inputKeyword);
  }, 500), [inputKeyword]);

  const dispatch = useDispatch();
  const addKeywordButton = () => {
    dispatch(addKeyword({
      kwdId : 123,
      kwdName : 'string'
    }));
  }

  return (
    <>
    <div>
      <input className='w-[100%] border-blue-100 border-2' type="text" onChange={onChange}/>
      <button onClick={addKeywordButton}> addKeywordButton </button>
      <div>
        {inputKeyword}
      </div>
    </div>
    </>
  )
}

export default KeyInput;