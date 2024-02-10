interface IAction {
  text: string;
  icon: THtml;
}

type TPopupDirection = 'bottomRight' | 'topLeft';

export interface IPopupUpProps {
  actions: IAction[];
  direction: TPopupDirection;
}
