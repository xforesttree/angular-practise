import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'elipse'
})
export class ElipsePipe implements PipeTransform {
    transform(value: string, cutoff: number = 10) {
        if (value.length > cutoff){
            return value.substr(0, cutoff) + "..."
        } else {
            return value
        }
    }
}

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(values: any[], filterOn: string, key?: string){
        if(values.length ===0){
            return
        } else if (filterOn === undefined){
            return values
        }
        const filteredValues = []
        for (const value of values) {
            if(value[key] === filterOn){
                filteredValues.push(value);
            }
        }
        return filteredValues
    }
}