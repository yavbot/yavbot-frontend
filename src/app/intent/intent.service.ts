
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../chat/chat';
import { Intent } from './intent';

@Injectable({
  providedIn: 'root'
})
export class IntentService {

  constructor(
		private http: HttpClient
	) { }

	private httOptions = {
		headers: new HttpHeaders({'Content-Type':'application/json'})
	}

	private url: string = "http://127.0.0.1:8000/api/intent/";

	public findById(id: number): Observable<Intent>{
		return this.http.get<Intent>(this.url+"/"+id, this.httOptions);
	}

	public save(intent: Intent): Observable<Intent>{
		return this.http.post<Intent>(this.url+"/", intent, this.httOptions);
	}

	public replace(intent: Intent): Observable<Intent>{
		return this.http.put<Intent> (this.url+"/"+intent.id+"/", intent, this.httOptions);
	}

	public update(intent: Intent): Observable<Intent>{
		return this.http.patch<Intent>(this.url+"/"+ intent.id+"/", intent, this.httOptions);
	}

	public train(): Observable<string> {
		return this.http.post<string>(this.url+"/l/train/", {} , this.httOptions );
	}

	public ask(term: Chat): Observable<Chat> {
		return this.http.post<Chat>(this.url+"/l/ask/", term, this.httOptions);
	}

	/*public deleteById(id: number): Observable<Intent>
  {
    return this.http.delete<Intent>(this.url+"/deleteById/"+id, this.httpOptions);
  }*/

}
