import { Component, inject, OnInit } from '@angular/core';
import { Shared } from '../../services/shared';
import { LineMachineResponse } from '../../interfaces/line-machine.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-overview',
  imports: [CommonModule, RouterOutlet, Navigation],
  templateUrl: './overview.html',
  styleUrl: './overview.scss'
})
export class Overview  implements OnInit {
  protected title = 'Overview';
  sharedService = inject(Shared);
  activatedRoute = inject(ActivatedRoute)
  lineMachineData: LineMachineResponse['data'] = [];
  currentRoute: string = '';

  ngOnInit(): void {
    this.getLineMachineData();
    this.getCurrentRoute();
  }

  /**
   * Fetches the current path form Route.
   * This method subscribes to the URL changes of the activated route
   * and updates the `currentRoute` property with the first segment of the URL.
   * subscribes to the `url` observable of the `ActivatedRoute` service to get the current route.
   * It updates the `currentRoute` property with the first segment of the URL path.
   */
  getCurrentRoute() {
    this.activatedRoute.url.subscribe((url) => {
      this.currentRoute = url[0]?.path || '';
    });
  }

  /**
   * Fetches line machine data from the shared service and assigns it to the `lineMachineData` property.
   * 
   * This method subscribes to the observable returned by `getLineMachineData()` of the shared service.
   * Upon receiving the response, it extracts the `data` property from the response object and assigns it
   * to the local `lineMachineData` variable.
   *
   * @remarks
   * This method assumes that the response from the service contains a `data` property holding the relevant information.
   */
  getLineMachineData() {
    this.sharedService.getLineMachineData().subscribe((data) => {
      this.lineMachineData = data.data;
    });
  }

  /**
   * Returns the corresponding Material icon CSS class name for a given component name.
   *
   * Maps specific component names (e.g., 'Scale', 'Attacher', 'Packer', 'Closer') to their
   * respective Material icon class names. If the provided name does not match any key in the map,
   * an empty string is returned.
   *
   * @param name - The name of the component for which to retrieve the icon class.
   * @returns The Material icon CSS class name associated with the component, or an empty string if not found.
   */
  getIconClassName(name: string): string {
    const iconMap: { [key: string]: string } = {
      'Scale': 'material-icons ',
      'Attacher': 'material-icons-outlined ',
      'Packer': 'material-icons-outlined ',
      'Closer': 'material-icons-outlined '
    };
    return iconMap[name] || '';
  }

  /**
   * Handles changes to the application's route.
   *
   * Updates the `currentRoute` property with the new route value.
   *
   * @param route - The new route string to set as the current route.
   */
  onRouteChange(route: string): void {
    this.currentRoute = route;
  }

}
