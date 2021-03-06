import { Pokemon } from '../interfaces/Pokemon';
import { Container } from '../style/Line';
import Item from './Item';

interface ColumnProps {
  info: Array<Pokemon>;
}

const Line: React.FC<ColumnProps> = ({info}) => {  
  return(
    <Container>
      {info.map( (elem, index) => <Item key={index} info={elem}/>)}
    </Container>
  )
}

export default Line;