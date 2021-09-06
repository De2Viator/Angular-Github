import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Repo } from '../models/repo';
import { map } from 'rxjs/operators';
import { Item } from '../models/item';
import { Observable } from "rxjs";
@Injectable()
export class RepoService {
    constructor (private http: HttpClient){}
    

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