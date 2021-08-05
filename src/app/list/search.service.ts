import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { Repo } from '../models/repo';
import { map } from 'rxjs/operators';

@Injectable()
export class SearchService{
    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]>{
        return this.http.get<User[]>('https://api.github.com/users');
    }

    searchUsers(username:string) : Observable<User[]> {
        return this.http.get('https://api.github.com/search/users?q=' + username).pipe(map((data:any)=>{
            let usersList = data["items"];
            return usersList.map(function(user: any): User {
                return new User(user.login, user.avatar_url);
              });
        }));
    }

    /*getRepo(login: string): Observable<Repo[]>{
        return this.http.get<Repo[]>('https://api.github.com/users/'+ login + '/repos').pipe(map((data:any)=>{
            let reposList = data["name"];
            return reposList.map(function(repo: any): Repo {
                return new Repo(repo.name);
              });
        }));
    }*/

    getRepo(login: string): Observable<Repo[]>{
        return this.http.get<Repo[]>('https://api.github.com/users/'+ login + '/repos');
    }
}