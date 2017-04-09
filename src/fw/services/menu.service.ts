/**
 * Created by binoy.sinha on 4/9/2017.
 */

import { Injectable } from '@angular/core';

export interface MenuItem {
  text: string;
  icon: string;
  route: string;
  submenu: Array<MenuItem>;
}

@Injectable()
export class MenuService {

  items: Array<MenuItem>;
}
