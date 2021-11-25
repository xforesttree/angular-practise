import { Link, Movie } from './types';

const techniques: string[] = [
    'Modules',
    'Components',
    'Custom types',
    'Property binding',
    'Hooks',
    '(custom) Event binding',
    'String interpolation',
    'Local references',
    '(custom) Props',
    'Angular equivalant of map',
    'Conditional rendering',
    'Services',
    'Directives',
    '(nested) Routing',
    'Observables',
    'Template Form (validation)',
    'Reactive Form (validation)',
    'Generated inputs on UI',
    'Custom validation',
    'Custom pipes',
]

const movies: Movie[] = [
    new Movie(
        '1',
        'Spirited Away',
        'Ah, a person of good taste! The best Ghibbli movie. Because of all the symbolism it\'s easy to miss the fact that Kaonashi tries to buy Chihiro\'s "services".',
        'https://images5.alphacoders.com/103/1031868.jpg',
        new Date(2003, 5, 10),
        'Hayao Miyazaki',
        '$15-19.2 million',
    ),
    new Movie(
        '2', 
        'Howl\'s moving castle',
        'Bisexuals love this, is it the hair or the respect for boundries?',
        'https://wallpaperaccess.com/full/2126719.jpg',
        new Date(2004, 11, 5),
    ),
    new Movie(
        '3', 
        'Ponyo',
        'For every movie they change how they animate water to reflect the feelings it\'s supposed to evoke',
        'https://studioghiblimovies.com/wp-content/uploads/2018/11/ponyo32.jpg',
        new Date(2009, 7, 23),
    ),
    new Movie(
        '4',
        'My neighbour Totoro',
        'Statues of Totoro are placed all over Japanese bus stops holding umbrellas for the kids. Especially in dark or desolete places.',
        'https://cdn.suwalls.com/wallpapers/anime/my-neighbor-totoro-27257-1920x1080.jpg',
        new Date(1988, 5, 16),
    ),
    new Movie(
        '5',
        'Kiki\'s delivery service',
        undefined,
        'https://wallpaperaccess.com/full/496068.jpg',
        new Date(1989, 7, 29),
    ),
    new Movie(
        '6',
        'Princess Mononoke',
        undefined,
        'https://images4.alphacoders.com/204/thumb-1920-204036.jpg',
        new Date(2000, 10, 5),
        'Hayao Miyazaki',
        '$23.5 million',
        '$169.7 million',
    ),
    new Movie(
        '7',
        'The wind rises'
    ),
    new Movie(
        '8',
        'Whisper of the Heart'
    ),
    new Movie(
        '9',
        'The cat returns'
    )
]

const links: Link[] = [
    new Link('/', 'home'),
    new Link('/about', 'about'),
    new Link('/sign-up', 'sign up')
]

const pronouns: string[] = [
    'They/Them',
    'He/Him',
    'She/Her',
    'They/He',
    'She/They',
    'It/Its'
]

export { movies, links, pronouns, techniques }