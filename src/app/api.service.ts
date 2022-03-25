import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "./models/user";
import { IRepo } from './models/repo';
import { Item } from './models/item';

@Injectable({
    providedIn:'root'
})

export class ApiService{
    constructor(private http: HttpClient){}

    getUsers(): Observable<IUser[]>{
        return this.http.get<IUser[]>('https://api.github.com/users');
    }

    searchUsers(username:string) {
        return this.http.get(`https://api.github.com/search/users?q=${username}`);
    }

    loadRepo(): Observable<Item[]>{
        return this.http.get<Item[]>('http://localhost:3000/favouriteRepo')
    }

    deleteRepo(id:number){
        return this.http.delete(`http://localhost:3000/favouriteRepo/${id}`)
    }

    getRepo(login: string): Observable<IRepo[]>{
        return this.http.get<IRepo[]>(`https://api.github.com/users/${login}/repos`);
    }

    likeRepo(repo: IRepo) {
        const body = {name: repo.name, id:repo.id}
        return this.http.post<IRepo>('http://localhost:3000/favouriteRepo', body)
    }
}