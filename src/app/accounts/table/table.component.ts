import { Component,OnInit,VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PlayerService } from '../services/playerservice';
import { ServicesService } from '../services/services.service';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  form!:FormGroup;
  submitted = false;
   services:any=[];
  players:any=[];
  id_player:any;
  Keyword:any;
  id_service:any;
  libelle:any;
  entry_date:any;
  date_end:any;
 

  constructor(private router:Router,private playerservice:PlayerService,private formBuilder:FormBuilder,private servicesService:ServicesService){
    this.form = this.formBuilder.group(
      {
       
        id_player: ['', [Validators.required, ]],
        Keyword: ['', [ Validators.required,]],
        id_service: ['', [ Validators.required,]],
        libelle: ['', [ Validators.required,]],

        entry_date: ['', [ Validators.required,]],
        date_end: ['', [ Validators.required,]],

      }
  )}
  ngOnInit(): void {
    this.onclick();
    this.getservice();
    this.get_player();
  }

  onclick():void{ 
    
    this.submitted = true;

    console.log(this.form.value)

    this.playerservice.get_player(this.form.value.id_player,this.form.value.keyword,this.form.value.id_service,this.form.value.libelle,this.form.value.entry_date,this.form.value.date_end).subscribe(respond => {
    console.log(respond);
    console.log(respond.isFailed);
    console.log(respond.code);
    if(respond.isFailed == false && respond.code === '201' && respond.data){
      this.players = respond.data ;

    } 
  }
    )}
    
    consulter(id_player:any){
      console.log(id_player)
      this.playerservice.get_joueur(id_player).subscribe(respond => {
        console.log(respond);
        sessionStorage.setItem('id',JSON.stringify(respond.data));
        
      });
      this.router.navigate(['./details/'+ id_player])
  
    }

    getservice(){ 
      this.servicesService.get_service_list().subscribe(respond => {
      this.services = respond.data ;
      console.log(respond);
      console.log(respond.isFailed);
      console.log(respond.code);
    }
      )}
    get_player(){
      this.playerservice.get_list_player().subscribe(respond => {
        this.players = respond.data ;
        console.log(respond);
        console.log(respond.isFailed);
        console.log(respond.code);
      }
        )
    }
    onSubmit(){
    }

}
