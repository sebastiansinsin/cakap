import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export interface User {
    login: string;
    id: string;
    avatar_url: string;
    repos_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    followers: number;
    following: number;
}

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    baseUrl = 'https://api.github.com/';
    header: HttpHeaders = new HttpHeaders();
    private userData = new BehaviorSubject<User>({
        login: '',
        id: '',
        avatar_url: '',
        repos_url: '',
        name: '',
        company: '',
        blog : '',
        location: '',
        email: '',
        hireable : false,
        bio : '',
        twitter_username: '',
        public_repos: 0,
        followers: 0,
        following: 0
    });
    public userData$ = this.userData.asObservable().pipe(distinctUntilChanged());
    constructor(private http: HttpClient) {
        this.header.append('Accept', 'application/vnd.github.v3+json');
    }
    public findUser(name: string): Observable<User> {
        const url = this.baseUrl + 'users/' + name;
        return this.http.get<User>(url, { headers: this.header }).pipe(
            map((res: User) => {
                return Object.assign({}, {
                    login: res.login,
                    id: res.id,
                    avatar_url: res.avatar_url,
                    repos_url: res.repos_url,
                    name: res.name,
                    company: res.company,
                    blog: res.blog,
                    location: res.location,
                    email: res.email,
                    hireable: res.hireable,
                    bio: res.bio,
                    twitter_username: res.twitter_username,
                    public_repos: res.public_repos,
                    followers: res.following,
                    following: res.followers
                });
            })
        );
    }

    public getRepos(reposUrl: string): Observable<any> {
        return this.http.get<any>(reposUrl, {headers: this.header});
    }

    public setUserData(userData: User): void {
        this.userData.next(userData);
    }
}
