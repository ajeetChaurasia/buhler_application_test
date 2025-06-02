/**
 * Represents a machine in a production line with its display name, current status, and associated icon.
 *
 * @property name - The display name of the machine.
 * @property status - The current operational status of the machine. Can be:
 *   - 'running': The machine is operating normally.
 *   - 'alarm': The machine has encountered a critical issue.
 *   - 'warning': The machine has a non-critical warning.
 * @property icon - The icon representing the machine, typically a URL or icon class name.
 */
export interface LineMachineList {
    name: string;
    status: 'running' | 'alarm' | 'warning';
    icon: string;
}

/**
 * Represents an item in a line machine, including its visual properties.
 *
 * @property icon - The name or path of the icon to display.
 * @property color - The primary color associated with the item.
 * @property bgColor - The background color for the item.
 * @property textColor - The color used for text displayed with the item.
 * @property iconColor - The color applied to the icon.
 * @property bigIcon - Optional. Indicates if the icon should be displayed in a larger size.
 */
export interface LineMachineItem {
    icon: string;
    color: string;
    bgColor: string;
    textColor: string;
    iconColor: string;
    bigIcon?: boolean;
}

/**
 * Represents the response structure for a list of line machines.
 *
 * @property data - An array of `LineMachineList` objects containing information about each line machine.
 */
export interface LineMachineResponse {
    data: LineMachineList[];
}