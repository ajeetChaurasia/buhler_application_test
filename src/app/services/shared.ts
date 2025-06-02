import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LineMachineItem, LineMachineResponse } from '../interfaces/line-machine.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class Shared {

  constructor(private http: HttpClient, private router: Router) { }

  
  /**
   * Retrieves machine data for a production line from a local JSON file.
   *
   * @returns An Observable that emits the line machine data as a `LineMachineResponse` object.
   *
   * @remarks
   * This method performs an HTTP GET request to fetch the data from
   * `../../assets/contractsJson/line-machines.json`. The returned observable
   * emits the parsed JSON data conforming to the `LineMachineResponse` interface.
   */
  getLineMachineData(): Observable<LineMachineResponse> {
    return this.http.get<LineMachineResponse>('../../assets/contractsJson/line-machines.json');
  } 

  /**
   * Extracts the icon and color configuration for a given machine state name.
   *
   * @param name - The state name of the machine. Supported values are:
   *   - `'running'`: Returns settings for a running state.
   *   - `'alarm'`: Returns settings for an alarm state.
   *   - `'warning'`: Returns settings for a warning state.
   * @returns A {@link LineMachineItem} object containing icon, color, background color,
   *   text color, and icon color properties corresponding to the provided state name.
   * @throws Will throw an error if the provided name does not match any supported state.
   */
  extractIconAndColor(name: string): LineMachineItem {
    let colorObject: { [key: string]: Function } = {
      'running': () => {
        return {
          icon: 'settings_backup_restore',
          color: '#ff9704',
          bgColor: '#dcdcdc', 
          textColor: '#363636',
          iconColor: '#020202',
        }
      },
      'alarm': () => {
        return {
          icon: 'error_outline',
          color:  '#ffffff',
          bgColor: '#fe3636', 
          textColor: '#ffffff',
          iconColor: '#ffffff'
        }
      },
      'warning': () => {
        return {
          icon: 'warning',
          color: '#ffffff',
          bgColor: '#ff9503', 
          textColor: '#ffffff',
          iconColor: '#ffffff'
        }
      }
    }

    return colorObject[name]();
  }


  /**
   * Navigates to the specified route using the Angular Router.
   *
   * @param route - The route path to navigate to.
   */
  redirectTo(route: string): void {
    this.router.navigate([route])
  }
}
