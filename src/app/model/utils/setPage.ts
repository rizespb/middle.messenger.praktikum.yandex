import { EPages } from '@/shared/constants';

let currentPage = EPages.Error500;

export const setPage = (pageCode: EPages): void => {
  currentPage = pageCode;
};

export { currentPage };
