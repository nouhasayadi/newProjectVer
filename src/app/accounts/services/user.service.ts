import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //cnx avec backend c deja on a met dans lenvirpnment le lien de backend 
  url = environment.Baseurl;
  //chaque requeste lezemha leaders
  headers = new HttpHeaders();
  //tabaath el request w tcapti el responce
  constructor(private http: HttpClient) { }

  get_user(id_user:any)
  {  
    return this.http.post<any>(this.url + '/User/list', {id_user}).pipe(map(res => {
       console.log(res);
       res.data
       return res;
     }));    };
  

  delete_user(id_user:any )
  {  
    console.log(id_user)
    return this.http.post<any>(this.url + '/User/delete', {id_user}).pipe(map(res => {
     // console.log(res);
      return res;
    }));
  }
  get_one_user(id_user:any){
    console.log(id_user)
    return this.http.post<any>(this.url + '/User/getuser', {id_user}).pipe(map(res => {
     // console.log(res);
      return res;
    }));
  }
  get_img(id_user:any){
    console.log(id_user)
    return this.http.post<any>(this.url + '/User/getimg', {id_user}).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }

  
}
