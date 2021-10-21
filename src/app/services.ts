import { EventEmitter } from "@angular/core";
import { movies } from "./constants";
import { Movie } from "./types";

class MovieService {
    newMovieSelected = new EventEmitter<Movie>();
    selected?: Movie;
    selectedId?: string;

    findById(id: string){
        return movies.find(movie => movie.id === id)
    }

    onSelected(id: string){
        this.selectedId = id
        this.selected = this.findById(id)
        this.newMovieSelected.emit(this.selected)
    }
}

export {MovieService}