import { compile } from '@/shared/utils';
import { chatPreview } from '@/entities/chat';
import { chatPreviewsMock } from './chatsList.mocks';
import tmpl from './chatsList.hbs?raw';
import classes from './chatList.module.scss';

const chats = chatPreviewsMock.map((preview) => chatPreview(preview));

export const chatsList = (): THtml => compile(tmpl)({ classes, chats });
