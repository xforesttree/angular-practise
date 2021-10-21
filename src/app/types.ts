class Movie {
    constructor(public id: string, public name: string, public description: string, public imageUrl?: string) {
    }
}

class Link {
    constructor(public url: string, public label: string) {
    }
}

export {Movie, Link}