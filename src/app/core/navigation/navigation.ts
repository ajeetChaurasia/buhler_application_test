import { Component, inject, input, output } from '@angular/core';
import { Shared } from '../../services/shared';
import { CommonModule } from '@angular/common';
import { LineMachineList, LineMachineResponse } from '../../interfaces/line-machine.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  providers: [Shared],
  imports: [CommonModule]
})
export class Navigation {
  sharedService = inject(Shared);
  machineData = input<LineMachineResponse['data']>([]);
  routeChange = output<string>();

  /**
   * Redirects the application to a specified route under the '/overview' path.
   *
   * Constructs the full path by appending the provided route to '/overview/',
   * then triggers a redirect using the shared service and emits a route change event.
   *
   * @param route - The relative route to navigate to, appended after '/overview/'.
   */
  redirectTo(route: string): void {
    const path = '/overview/'+route;
    this.sharedService.redirectTo(path);
    this.routeChange.emit(path);
  }

}
