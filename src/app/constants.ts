import { Link, Movie } from "./types";

const movies: Movie[] = [
    new Movie(
        "1",
        'Spirited Away',
        "Ah, a person of good taste! The best Ghibbli movie. Because of all the symbolism it's easy to miss the fact that Kaonashi tries to buy Chihiro",
        "https://images5.alphacoders.com/103/1031868.jpg"),
    new Movie(
        "2", 
        'Howl\'s moving castle',
        'Bisexuals love this',
        'https://wallpaperaccess.com/full/2126719.jpg')
]

const links: Link[] = [
    new Link('/', 'home'),
    new Link('/about', 'about')
]

export { movies, links }