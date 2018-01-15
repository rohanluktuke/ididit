import { Accomplishment } from './model/Accomplishment';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from './auth/auth.service';
@Injectable()
export class AccomplishmentService {
    accomplishments = [
        {
          type: 'Technical',
          what: 'speed up by 50%',
          how: 'using caching',
          extra: ''
        },
        {
          type: 'Volunteering',
          what: 'packed boxes',
          how: '',
          extra: ''
        },
        {
          type: 'Foo',
          what: 'Bar222',
          how: '',
          extra: ''
        }
    ];

    constructor(private http: Http,
                private authService: AuthService) {

    }


    addAccomplishment(ac: Accomplishment) {
      const token = this.authService.getToken();
      console.log('Type: ' + ac.type);
      //this.accomplishments.push(ac);
      return this.http.post('https://ididit-d37e8.firebaseio.com/data.json?auth=' + token, ac);

    }

    getAccomplishments() {
      const token = this.authService.getToken();
      const uid = this.authService.getCurrentUserUUID();
      return this.http.get('https://ididit-d37e8.firebaseio.com/data.json?auth=' + token + ';orderBy=\"userid\"&equalTo=\"' + uid + '\"')
      .map(
        (response: Response) => {
          const data = response.json();
          console.log(data);
          return data;
        }
      );
    }
}
