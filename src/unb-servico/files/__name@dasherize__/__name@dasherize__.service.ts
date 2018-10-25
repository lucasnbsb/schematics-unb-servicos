import { Injectable } from '@angular/core';
import { HttpService } from 'ems-oauth2-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'app'
})
export class <%= classify(name) %>Service extends ServiceUtil {

private url = '/<%= decamelize(area)%>/<%= decamelize(name)%>'

  constructor(
    private http: HttpService,
  ) { super(); }

  public buscar<%= classify(name) %>(<%= decamelize(name)%>: <%= classify(name) %>): Observable<<%= classify(name) %>[]>{
    return this.http.get(this.url + '?filter=' + JSON.stringify(<%= decamelize(name)%>));
  }

  public inserir<%= classify(name) %>(<%= decamelize(name)%>: <%= classify(name) %>){
    return this.http.post(this.url, JSON.stringify(<%= decamelize(name)%>));
  }

  public deletar<%= classify(name) %>(id: number){
    return this.http.post(this.url + '/'+ id);
  }

  public atualizar<%= classify(name) %>(id: number, <%= decamelize(name)%>: <%= classify(name) %>){
    return this.http.put(this.url + '/'+ id, JSON.stringify(<%= decamelize(name)%>);
  }

}