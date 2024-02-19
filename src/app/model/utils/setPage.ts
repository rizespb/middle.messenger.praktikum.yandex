import { EPages } from '@/shared/constants';

let currentPage = EPages.LogInPage;

export const setPage = (pageCode: EPages): void => {
  currentPage = pageCode;
};

export { currentPage };
