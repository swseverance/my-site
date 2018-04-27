import {
  Component,
  HostListener,
  ElementRef,
  Inject,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

// tslint:disable
@Component({
  selector: `button[material-design-button]`,
  template: `
    <ng-content></ng-content>
    <div #rippleContainer class="ripple-container"></div>
  `,
  host: { class: 'material-design-button' },
  styleUrls: ['./material-design-button.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class MaterialDesignButtonComponent {
  @ViewChild('rippleContainer', { read: ElementRef })
  rippleContainer: ElementRef;

  @HostListener('click', ['$event'])
  onClick({ clientX, clientY, target }) {
    const {
      radius,
      offsetX,
      offsetY
    } = this.calculateRadiusAndOffsetPositionOfRipple(clientX, clientY, target);

    const rippleElement = this.createAndStyleRippleElement(
      radius,
      offsetX,
      offsetY
    );

    this.rippleContainer.nativeElement.appendChild(rippleElement);

    this.rippleContainer.nativeElement.addEventListener(
      'transitionend',
      () => {
        this.rippleContainer.nativeElement.removeChild(rippleElement);
      },
      { once: true } as any
    );

    /**
     * per Angular Material docs, forces a style recalculation of a DOM element
     * by computing its styles.
     */
    window.getComputedStyle(rippleElement).getPropertyValue('opacity');

    rippleElement.style.transform = 'scale(1)';
  }

  private calculateRadiusAndOffsetPositionOfRipple(
    clientX: number,
    clientY: number,
    target: HTMLDivElement
  ): { radius: number; offsetX: number; offsetY: number } {
    /**
     * get the dimensions of the .ripple-container element relative to
     * the viewport
     */
    const { top, left, height, width } = target.getBoundingClientRect();

    /**
     * clientX & clientY tell us where the click event occurred relative
     * to the viewport. we can easily calculate the position of the click event
     * within the .ripple-container
     */
    const offsetX = clientX - left;
    const offsetY = clientY - top;

    /**
     * we need to determine how big to make our ripple circle. if we set the
     * radius of our circle to be equal to the distance from the click to the
     * furthest corner of .ripple-element then we're guaranteed to have a big
     * enough circle. the position of each corner is given by:
     *
     * (0,0) -------- (width, 0)
     *   |                |
     *   |                |
     *   |                |
     * (height, 0) -- (width, height)
     */
    const furthestSideHorizontally = offsetX < width / 2 ? width : 0;
    const furthestSideVertically = offsetY < height / 2 ? height : 0;
    const radius = Math.sqrt(
      Math.pow(furthestSideHorizontally - offsetX, 2) +
        Math.pow(furthestSideVertically - offsetY, 2)
    );

    return { radius, offsetX, offsetY };
  }

  private createAndStyleRippleElement(
    radius: number,
    offsetX: number,
    offsetY: number
  ): HTMLDivElement {
    const rippleElement: HTMLDivElement = this.document.createElement('div');
    rippleElement.classList.add('ripple');
    rippleElement.style.left = `${offsetX - radius}px`;
    rippleElement.style.top = `${offsetY - radius}px`;
    rippleElement.style.height = `${2 * radius}px`;
    rippleElement.style.width = `${2 * radius}px`;

    return rippleElement;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}
}
