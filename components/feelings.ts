import { ImageRequireSource } from 'react-native';

interface Feelings {
    id: number;
    name: string;
    color: string;
    image: ImageRequireSource;
}

export const feelings : Array<Feelings> = [
    {
        id: 1,
        name: 'Feliz',
        color: '#FFD700',
        image: require('../assets/feelings/feliz.png'),
    },
    {
        id: 2,
        name: 'Triste',
        color: '#1E90FF',
        image: require('../assets/feelings/triste.png'),
    },
    {
        id: 3,
        name: 'Enfadado',
        color: '#F4C534',
        image: require('../assets/feelings/enfadado.png'),
    },
    {
        id: 4,
        name: 'Ansioso',
        color: '#667EFF',
        image: require('../assets/feelings/ansioso.png'),
    },
    {
        id: 5,
        name: 'Estresado',
        color: '#FF00FF',
        image: require('../assets/feelings/estresado.png'),
    },
    // {
    //     id: 6,
    //     name: 'Confundido',
    //     color: '#FFA500',
    //     // image: require('../assets/feelings/confused.png'),
    // },
    {
        id: 7,
        name: 'Aburrido',
        color: '#808080',
        image: require('../assets/feelings/aburrido.png'),
    },
    {
        id: 8,
        name: 'Cansado',
        color: '#CCBB34',
        image: require('../assets/feelings/cansado.png'),
    },
    // {
    //     id: 9,
    //     name: 'Solo',
    //     color: '#000080',
    //     // image: require('../assets/feelings/lonely.png'),
    // },
    {
        id: 10,
        name: 'Nervioso',
        color: '#FFFF00',
        image: require('../assets/feelings/nervioso.png'),
    },
    // {
    //     id: 11,
    //     name: 'Frustrado',
    //     color: '#000080',
    //     // image: require('../assets/feelings/frustrated.png'),
    // },
    {
        id: 12,
        name: 'Deprimido',
        color: '#800080',
        image: require('../assets/feelings/deprimido.png'),
    },
    // {
    //     id: 13,
    //     name: 'Culpable',
    //     color: '#FF0000',
    // },
    // {
    //     id: 14,
    //     name: 'Avergonzado',
    //     color: '#008080',
    // },
    // {
    //     id: 15,
    //     name: 'Envidioso',
    //     color: '#00FF00',
    // },
    {
        id: 16,
        name: 'Celoso',
        color: '#00FFFF',
        image: require('../assets/feelings/celoso.png'),
    },
    // {
    //     id: 17,
    //     name: 'Orgulloso',
    //     color: '#000000',
    // },
    {
        id: 18,
        name: 'Emocionado',
        color: '#FFA07A',
        image: require('../assets/feelings/emocionado.png'),
    },
    // {
    //     id: 19,
    //     name: 'Sorprendido',
    //     color: '#FFDAB9',
    // },
    {
        id: 20,
        name: 'Molesto',
        color: '#F0E68C',
        image: require('../assets/feelings/molesto.png'),
    },
    // {
    //     id: 21,
    //     name: 'Decepcionado',
    //     color: '#ADD8E6',
    // },
    // {
    //     id: 22,
    //     name: 'Concentrado',
    //     color: '#90EE90',
    // },
    {
        id: 23,
        name: 'Relajado',
        color: '#E0FFFF',
        image: require('../assets/feelings/relajado.png'),
    },
    // {
    //     id: 24,
    //     name: 'Inspirado',
    //     color: '#FFFAF0',
    // },
    {
        id: 25,
        name: 'Asustado',
        color: '#FFE4E1',
        image: require('../assets/feelings/asustado.png'),
    },
];