/**
 * Created by binoy.sinha on 4/14/2017.
 */
import { Observable } from 'rxjs/Observable';

export abstract class UserApi {
  signIn: (username: string, password: string, rememberMe: boolean) => Observable<any>;
   signOut: () => Observable<any>;
  // changePassword :
}
