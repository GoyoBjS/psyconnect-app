import { ImageRequireSource } from 'react-native'

export interface Solutions {
  id: number
  name: string
  color: string
  image: ImageRequireSource
}

const REASONS_URL = '../assets/solutions/'

export const solutions: Array<Solutions> = [
  {
    id: 1,
    name: 'No lo sé',
    color: '#FFD700',
    image: require(`${REASONS_URL}nolose.png`)
  },
  {
    id: 2,
    name: 'Hablando',
    color: '#1E90FF',
    image: require(`${REASONS_URL}hablando.png`)
  },
  {
    id: 3,
    name: 'Deporte',
    color: '#F4C534',
    image: require(`${REASONS_URL}deporte.png`)
  },
  {
    id: 4,
    name: 'Meditando',
    color: '#667EFF',
    image: require(`${REASONS_URL}meditando.png`)
  },
  {
    id: 5,
    name: 'Pensando',
    color: '#FF00FF',
    image: require(`${REASONS_URL}pensando.png`)
  },
  {
    id: 6,
    name: 'Tiempo',
    color: '#808080',
    image: require(`${REASONS_URL}tiempo.png`)
  }
]
