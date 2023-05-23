import { ImageRequireSource } from 'react-native'

export interface Reasons {
  id: number
  name: string
  color: string
  image: ImageRequireSource
}

const REASONS_URL = '../assets/reasons/'

export const reasons: Array<Reasons> = [
  {
    id: 1,
    name: 'No lo sé',
    color: '#FFD700',
    image: require(`${REASONS_URL}nolose.png`)
  },
  {
    id: 2,
    name: 'Amigos',
    color: '#1E90FF',
    image: require(`${REASONS_URL}amigos.png`)
  },
  {
    id: 3,
    name: 'Familiares',
    color: '#F4C534',
    image: require(`${REASONS_URL}familia.png`)
  },
  {
    id: 4,
    name: 'Trabajo',
    color: '#667EFF',
    image: require(`${REASONS_URL}trabajar.png`)
  },
  {
    id: 5,
    name: 'Pensamientos',
    color: '#FF00FF',
    image: require(`${REASONS_URL}pensar.png`)
  },
  {
    id: 6,
    name: 'Mascotas',
    color: '#808080',
    image: require(`${REASONS_URL}mascotas.png`)
  },
  {
    id: 7,
    name: 'Situación externa',
    color: '#CCBB34',
    image: require(`${REASONS_URL}problem.png`)
  },
  {
    id: 8,
    name: 'Estudios',
    color: '#FFFF00',
    image: require(`${REASONS_URL}estudios.png`)
  },
  {
    id: 9,
    name: 'Pareja',
    color: '#00FFFF',
    image: require(`${REASONS_URL}pareja.png`)
  },
  {
    id: 10,
    name: 'Deporte',
    color: '#FFA07A',
    image: require(`${REASONS_URL}deporte.png`)
  }
]
