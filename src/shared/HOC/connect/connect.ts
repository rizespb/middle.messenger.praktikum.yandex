import { Block, IBlockProps } from '@/shared/render';
import { EStoreEvents } from '@/shared/store';
import { isEqual } from '@/shared/utils';
import { TMapStateToProps } from './connect.interfaces';

export const connect = <T extends IBlockProps>(
  Component: typeof Block<T>,
  mapStateToProps: TMapStateToProps<T>
): typeof Block<T> =>
  class extends Component {
    constructor(props: T) {
      // сохраняем начальное состояние
      let stateToProps = mapStateToProps(appStore.getState());

      // не забываем передать все аргументы конструктор компонента
      super({ ...props, ...mapStateToProps(appStore.getState()) });

      // подписываемся на событие
      appStore.on(EStoreEvents.Updated, () => {
        const newStateToProps = mapStateToProps(appStore.getState());

        // Если нужная часть стора изменилась, тогда обновляем пропсы в компоненте
        if (!isEqual(stateToProps, newStateToProps)) {
          // вызываем обновление компонента, передав данные из хранилища
          this.setProps({ ...mapStateToProps(appStore.getState()) });
        }

        stateToProps = newStateToProps;
      });
    }
  };
