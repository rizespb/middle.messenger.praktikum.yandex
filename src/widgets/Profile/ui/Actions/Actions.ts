import { Button } from '@/shared/ui';
import { Block, IChildren } from '@/shared/render';
import { userController } from '@/entities/User';
import tmpl from './Actions.hbs?raw';
import classes from './Actions.module.scss';
import { IActionsProps } from './Actions.interfaces';

export class Actions extends Block<IActionsProps> {
  protected getInternalChildren(): IChildren {
    const changePersonalDetailsData = new Button({
      title: 'Изменить данные',
      type: 'button',
      kind: 'secondary',
      className: classes.button,
      events: {
        click: (): void => {
          this.props.changePersonalDetails();
        },
      },
    });

    const changePassword = new Button({
      title: 'Изменить пароль',
      type: 'button',
      kind: 'secondary',
      className: classes.button,
      events: {
        click: (): void => {
          this.props.changePasswrod();
        },
      },
    });

    const logOut = new Button({
      title: 'Выйти',
      type: 'button',
      kind: 'tertiary',
      className: classes.button,
      events: {
        click: (): void => {
          userController.logOut();
        },
      },
    });

    const actions = [changePersonalDetailsData, changePassword, logOut];

    return { actions };
  }

  protected render(): DocumentFragment {
    return this.compile(tmpl, { classes });
  }
}
