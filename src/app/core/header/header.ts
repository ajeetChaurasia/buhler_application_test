import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { Shared } from '../../services/shared';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
/**
 * Represents the header component logic for the application.
 * 
 * Handles displaying the current timestamp, toggling the user menu,
 * and redirecting to different routes via a shared service.
 * 
 * @remarks
 * - Uses Angular's dependency injection to access shared services and element references.
 * - Listens for document click events to close the menu when clicking outside.
 * - Provides a list of menu items for navigation.
 * 
 * @property {string} timestamp - The current date and time, formatted as 'dd.MM.yyyy HH:mm'.
 * @property {boolean} showMenu - Indicates whether the user menu is visible.
 * @property {Array<{name: string, icon: string, route: string}>} menuList - List of menu items with names, icons, and routes.
 * 
 * @method getDate - Returns the current date and time as a formatted string.
 * @method showUserMenu - Toggles the visibility of the user menu.
 * @method redirectTo - Redirects to the specified route using the shared service.
 * @method closeMenu - Closes the menu if a click occurs outside the component.
 */
export class Header {
  timestamp = this.getDate();
  showMenu = false;
  sharedService = inject(Shared);
  eRef = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showMenu = false;
    }
  }


   menuList = [
    {name: 'Profile', icon: 'person', route: '/profile'},
    {name: 'Settings', icon: 'settings', route: '/settings'},
  ]


  /**
   * Returns the current date and time as a formatted string in the format "DD.MM.YYYY HH:mm".
   *
   * The day, month, hours, and minutes are always two digits (zero-padded if necessary).
   * Example output: "05.07.2024 14:09"
   *
   * @returns {string} The formatted current date and time.
   */
  getDate(): string {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const year = currentDate.getFullYear();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    return  `${day}.${month}.${year} ${hours}:${minutes}`;
  }

  /**
   * Toggles the visibility of the user menu.
   *
   * This method inverts the current state of the `showMenu` property,
   * effectively showing the menu if it is hidden, or hiding it if it is visible.
   */
  showUserMenu(): void {
    this.showMenu = !this.showMenu;
  }

  /**
   * Redirects the user to the specified route using the shared service.
   *
   * @param route - The route path to which the user should be redirected.
   */
  redirectTo(route: string): void {
    this.sharedService.redirectTo(route);
  }  

}
