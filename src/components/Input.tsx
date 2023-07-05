import { ChangeEventHandler, useState } from 'react';

const Input = () => {
  const [text, setText] = useState('');
  const handleText: ChangeEventHandler<HTMLInputElement> = ({ currentTarget: { value } }) => {
    setText(value);
  };

  return <input type="text" value={text} onChange={handleText} />;
};
export default Input;
