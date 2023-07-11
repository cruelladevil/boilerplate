import Input from './components/Input';
import Counter from './components/Counter';
import { Ukko } from './types';

const App = () => {
  const hello: Ukko = {
    foo: 'world',
  };

  return (
    <div>
      <Input />
      <Counter />
    </div>
  );
};

export default App;
