import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../components/models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  endPointRandomText: string = "https://baconipsum.com/api/?type=meat-and-filler"
  endPointUrlSecond: string = "https://jsonplaceholder.typicode.com/photos"


  constructor(private http: HttpClient) {}

    getAllItems(): Observable<Item[]> {
      return this.http.get<Item[]>(this.endPointUrlSecond)
    }


    getItemById(id:number): Observable<Item> {
      return this.http.get<Item>(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${id}`)
    }

    getRandomText(): Observable<string> {
      return this.http.get<string>(this.endPointRandomText)
    }

}
