import { EPages } from '@/shared/constants';

let currentPage = EPages.СhatsPage;

export const setPage = (pageCode: EPages): void => {
  currentPage = pageCode;
};

export { currentPage };
