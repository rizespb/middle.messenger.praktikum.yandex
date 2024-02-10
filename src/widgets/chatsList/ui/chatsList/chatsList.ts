import { compile } from '@/shared/utils';
import { chatPreview } from '@/entities/chat';
import tmpl from './chatsList.hbs?raw';
import { chatPreviewsMock } from './chatsList.mocks';

const chats = chatPreviewsMock.map((preview) => chatPreview(preview));

export const chatsList = (): THtml => compile(tmpl)({ chats });
