import { Block, render } from '@/shared/render';
import { IRouteProps, TBlockClass } from './Route.interfaces';

export class Route {
  _pathname: string;

  _blockClass: TBlockClass;

  _block: Block | null = null;

  _props: IRouteProps;

  isProtected: boolean;

  constructor(pathname: string, view: TBlockClass, props: IRouteProps) {
    this._pathname = pathname;
    this._blockClass = view;
    this.isProtected = props.isProtected;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string): boolean {
    return pathname === this._pathname;
  }

  render(): void {
    if (!this._block) {
      this._block = new this._blockClass({});

      render(this._props.rootQuery, this._block);

      return;
    }

    this._block.show();
  }
}
