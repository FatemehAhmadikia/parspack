import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], searchString: string) {
    if (!searchString || !list) {
      return list;
    }
    searchString = searchString.toLowerCase();
    let result = list.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchString) ||
        item.username.toLowerCase().includes(searchString) ||
        item.email.toLowerCase().includes(searchString) ||
        item.address.city.toLowerCase().includes(searchString) 
      );
    });
    return result;
  }
}
