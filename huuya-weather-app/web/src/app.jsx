import { useEffect, useState } from 'react';
import useApi from '@hooks/useApi';

export default () => {
  const {data, loading, error, fetch} = useApi("http://localhost:3001/");

  useEffect(() => {
    (async () => {
      await fetch();
    })();
  },[]);

  console.log(loading, error, data);
  return (
    <h1>Hello, World</h1>
  );
};
