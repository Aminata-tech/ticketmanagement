import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
url= environment.url;

  constructor(private http: HttpClient) { }

  // Gestion personnel
  public ajoutPersonnel(data: any){
    return this.http.post(this.url + "personnel/save/personnel", data);
  }
    public listPersonnel(){
      return this.http.get(this.url + "personnel/list/personnel");
  }
  public updatePersonnel(id: any, data: any){
    return this.http.put(this.url + "personnel/update/personnel/"+id, data);
  }
  public deletePersonnel(id: any){
    return this.http.delete(this.url + "personnel/delete/"+id);
  }

//Gestion utilisateur
public ajoutUtilisateur(data: any){
  return this.http.post(this.url + "utilisateur/save/utilisateur", data);
}
  public listUtilisateur(){
    return this.http.get(this.url + "utilisateur/list/utilisateur");
}
public updateUtilisateur(id: any, data: any){
  return this.http.put(this.url + "utilisateur/update/utilisateur/"+id, data);
}
public deleteUtilisateur(id: any){
  return this.http.delete(this.url + "utilisateur/delete/"+id);


 }
//Gestion des ticket
public ajoutTicket(data: any){
  return this.http.post(this.url + "ticket/save/ticket", data);
}
  public listTicket(){
    return this.http.get(this.url + "ticket/list/ticket");
}
public updateTicket(id: any, data: any){
  return this.http.put(this.url + "ticket/update/ticket/"+id, data);
}
public deleteTicket(id: any){
  return this.http.delete(this.url + "ticket/delete/"+id);


}
}