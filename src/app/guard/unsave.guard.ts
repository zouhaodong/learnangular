import {CanDeactivate} from '@angular/router';
import {ProductComponent} from '../product/product.component';

export class UnsaveGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    return window.confirm('确定要离开吗？');
  }
}
