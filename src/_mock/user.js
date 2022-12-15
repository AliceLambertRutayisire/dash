import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(4)].map((_, index) => ({
  id: faker.datatype.uuid(),
  
  breakfast: sample(['Ommlette', 'Peanuts']),
  lunch: sample(['Bananas']),
  water: sample(['2000', '1500']),
  snacks: sample([]),
  dinner: sample([
    'Jollof',
    'Pilau',

    
  ]),
}));

export default users;
