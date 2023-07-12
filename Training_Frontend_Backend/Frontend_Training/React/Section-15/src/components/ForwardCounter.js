

import Card from './Card';
import useCount from '../hooks/use-counter';

const ForwardCounter = () => {
 const counter=useCount();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
