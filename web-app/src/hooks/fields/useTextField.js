import { useState, useCallback } from 'react';

const useTextField = () => {
  const [content, setContent] = useState('');

  const handleChange = useCallback(
    event => setContent(event.target.value),
    [setContent]);

  return {
    content,
    handleChange
  };
};

export default useTextField;
