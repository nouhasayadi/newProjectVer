import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  //cnx avec backend c deja on a met dans lenvirpnment le lien de backend 
  url = environment.Baseurl;
  //chaque requeste lezemha leaders
  headers = new HttpHeaders();
  //tabaath el request w tcapti el responce
  constructor(private http: HttpClient) { }

  get_player(id_player:any,keyword:any,id_service:any,libelle :any,entry_date:any,date_end:any)
  {  
    return this.http.post<any>(this.url + '/player/get', {id_player,keyword,id_service,libelle,entry_date,date_end}).pipe(map(res => {
       console.log(res);
       console.log(res.data);
       res.data
       return res;
     }));    };

  get_list_player(){
    return this.http.post<any>(this.url + '/player/list', {}).pipe(map(res => {
      console.log(res);
      console.log(res.data);
      res.data
      return res;
    })); 
  }
  
  get_joueur(id_player:any)
  {  
    return this.http.post<any>(this.url + '/player/joueur', {id_player}).pipe(map(res => {
       console.log(res);
       console.log(res.data);
       return res;
     })); 
       };
  
  
}
