import {
  EMessageDirection,
  EMessageType,
  IMessagesGroup,
  EMessageStatus,
} from '@/entities/message';

// @TODO в дальнейшем удалить
export const messagesGroupsMock: IMessagesGroup[] = [
  {
    date: '19 июня',
    messages: [
      {
        type: EMessageType.Text,
        content: 'Круто!',
        direction: EMessageDirection.Outcoming,
        date: '19 июня',
        time: '12:00',
        status: EMessageStatus.Read,
      },
      {
        type: EMessageType.Text,
        content:
          'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
        direction: EMessageDirection.Incoming,
        date: '19 июня',
        time: '11:57',
        status: EMessageStatus.Read,
      },
      {
        type: EMessageType.Image,
        content: 'https://images.unsplash.com/photo-1707499929621-8e55b938aeb7',
        direction: EMessageDirection.Incoming,
        date: '19 июня',
        time: '11:56',
        status: EMessageStatus.Read,
      },
      {
        type: EMessageType.Text,
        content:
          'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        direction: EMessageDirection.Incoming,
        date: '19 июня',
        time: '11:55',
        status: EMessageStatus.Read,
      },
    ],
  },
  {
    date: '18 июня',
    messages: [
      {
        type: EMessageType.Text,
        content: 'Круто!',
        direction: EMessageDirection.Outcoming,
        date: '18 июня',
        time: '12:00',
        status: EMessageStatus.Read,
      },
      {
        type: EMessageType.Image,
        content: 'https://images.unsplash.com/photo-1707343843344-011332037abb',
        direction: EMessageDirection.Outcoming,
        date: '18 июня',
        time: '11:59',
        status: EMessageStatus.Read,
      },
      {
        type: EMessageType.Text,
        content:
          'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
        direction: EMessageDirection.Incoming,
        date: '18 июня',
        time: '11:57',
        status: EMessageStatus.Read,
      },
      {
        type: EMessageType.Text,
        content:
          'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        direction: EMessageDirection.Incoming,
        date: '18 июня',
        time: '11:55',
        status: EMessageStatus.Read,
      },
    ],
  },
  {
    date: '17 июня',
    messages: [
      {
        type: EMessageType.Image,
        content: 'https://images.unsplash.com/photo-1707058665477-560297ffe913',
        direction: EMessageDirection.Incoming,
        date: '17 июня',
        time: '12:03',
        status: EMessageStatus.Delivered,
      },
      {
        type: EMessageType.Text,
        content: 'Круто!',
        direction: EMessageDirection.Outcoming,
        date: '17 июня',
        time: '12:00',
        status: EMessageStatus.Read,
      },
      {
        type: EMessageType.Text,
        content:
          'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
        direction: EMessageDirection.Incoming,
        date: '17 июня',
        time: '11:57',
        status: EMessageStatus.Read,
      },
      {
        type: EMessageType.Text,
        content:
          'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        direction: EMessageDirection.Incoming,
        date: '17 июня',
        time: '11:55',
        status: EMessageStatus.Read,
      },
    ],
  },
];
