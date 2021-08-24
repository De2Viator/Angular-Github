import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { Repo } from '../models/repo';
import { map } from 'rxjs/operators';
import { Item } from '../models/item';
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

    getRepo(login: string): Observable<Repo[]>{
        return this.http.get<Repo[]>('https://api.github.com/users/'+ login + '/repos').pipe(map((data:any)=>{
            let userRepos = data;
            return userRepos.map(function (repo: any): Repo{
                return new Repo(repo.name, repo.description, repo.language, repo.html_url, repo.has_issues, repo.id )
            });
        }));
    }

    loadRepo(): Observable<Item[]>{
        return this.http.get<Item[]>('http://localhost:3000/favouriteRepo')
    }

    likeRepo(repo: Repo) {
        const body = {name: repo.name, id:repo.id}
        return this.http.post('http://localhost:3000/favouriteRepo', body)
    }

    deleteRepo(id:number){
        return this.http.delete('http://localhost:3000/favouriteRepo' + '/' + id)
    }
}