import { ImageRequireSource } from 'react-native'

interface Reasons {
  id: number
  name: string
  color: string
  image: ImageRequireSource
}

export const reasons: Array<Reasons> = [
  {
    id: 1,
    name: 'No lo sé',
    color: '#FFD700',
    image: require('../assets/feelings/feliz.png')
  },
  {
    id: 2,
    name: 'Amigos',
    color: '#1E90FF',
    image: require('../assets/feelings/triste.png')
  },
  {
    id: 3,
    name: 'Familiares',
    color: '#F4C534',
    image: require('../assets/feelings/enfadado.png')
  },
  {
    id: 4,
    name: 'Trabajo',
    color: '#667EFF',
    image: require('../assets/feelings/ansioso.png')
  },
  {
    id: 5,
    name: 'Pensamientos',
    color: '#FF00FF',
    image: require('../assets/feelings/estresado.png')
  },
  {
    id: 6,
    name: 'Mascotas',
    color: '#808080',
    image: require('../assets/feelings/aburrido.png')
  },
  {
    id: 7,
    name: 'Situación externa',
    color: '#CCBB34',
    image: require('../assets/feelings/cansado.png')
  },
  {
    id: 8,
    name: 'Estudios',
    color: '#FFFF00',
    image: require('../assets/feelings/nervioso.png')
  },
  {
    id: 9,
    name: 'Pareja',
    color: '#00FFFF',
    image: require('../assets/feelings/celoso.png')
  },
  {
    id: 10,
    name: 'Deporte',
    color: '#FFA07A',
    image: require('../assets/feelings/emocionado.png')
  }
]
