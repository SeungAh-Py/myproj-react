// key : localStorage에 저장될 키 이름
// initialValue : 키의 초기값
// userLocalStorage는 한개의 키에 대해 서만 관리

import { useEffect, useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const jsonString = window.localStorage.getItem(key);
    try {
      return jsonString ? JSON.parse(jsonString) : initialValue;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  useEffect(() => {
    const jsonString = JSON.stringify(data);
    window.localStorage.setItem(key, jsonString);
  }, [key, data]);

  //   // TODO: 고민해볼 문제: data에 대한 useEffect로서 구현해볼수 있지 않을까?
  //   const setDataToLocalStorage = (value) => {
  //     //FIXME: value가 함수일때, 외부 data 참조하는 부분
  //     const valueToStore = value instanceof Function ? value(data) : value;
  //     setData(valueToStore);
  //     window.localStorage.setItem(key, JSON.stringify(valueToStore));
  //   };
  //   return [data, setDataToLocalStorage];

  return [data, setData];
}

export default useLocalStorage;
