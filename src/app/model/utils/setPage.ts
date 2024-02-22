import { EPages } from '@/shared/constants';

let currentPage = EPages.ChatsPage;

export const setPage = (pageCode: EPages): void => {
  currentPage = pageCode;
};

export { currentPage };
