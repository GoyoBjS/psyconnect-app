import { ImageRequireSource } from 'react-native'

export interface Feelings {
  id: number
  name: string
  color: string
  image: ImageRequireSource
}

export const feelings: Array<Feelings> = [
  {
    id: 1,
    name: 'Feliz',
    color: '#FFD700',
    image: require('../assets/feelings/feliz.png')
  },
  {
    id: 2,
    name: 'Triste',
    color: '#1E90FF',
    image: require('../assets/feelings/triste.png')
  },
  {
    id: 3,
    name: 'Enfadado',
    color: '#f47734',
    image: require('../assets/feelings/enfadado.png')
  },
  {
    id: 4,
    name: 'Ansioso',
    color: '#667EFF',
    image: require('../assets/feelings/ansioso.png')
  },
  {
    id: 5,
    name: 'Estresado',
    color: '#FF00FF',
    image: require('../assets/feelings/estresado.png')
  },
  {
    id: 7,
    name: 'Aburrido',
    color: '#808080',
    image: require('../assets/feelings/aburrido.png')
  },
  {
    id: 8,
    name: 'Cansado',
    color: '#CCBB34',
    image: require('../assets/feelings/cansado.png')
  },
  {
    id: 10,
    name: 'Nervioso',
    color: '#affa34',
    image: require('../assets/feelings/nervioso.png')
  },
  {
    id: 12,
    name: 'Deprimido',
    color: '#800080',
    image: require('../assets/feelings/deprimido.png')
  },
  {
    id: 16,
    name: 'Celoso',
    color: '#00FFFF',
    image: require('../assets/feelings/celoso.png')
  },
  {
    id: 18,
    name: 'Emocionado',
    color: '#FFA07A',
    image: require('../assets/feelings/emocionado.png')
  },
  {
    id: 20,
    name: 'Molesto',
    color: '#F0E68C',
    image: require('../assets/feelings/molesto.png')
  },
  {
    id: 23,
    name: 'Relajado',
    color: '#81fafa',
    image: require('../assets/feelings/relajado.png')
  },
  {
    id: 25,
    name: 'Asustado',
    color: '#FFE4E1',
    image: require('../assets/feelings/asustado.png')
  }
]
