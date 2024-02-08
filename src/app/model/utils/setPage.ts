import { EPages } from '@/shared/constants';

let currentPage = EPages.SignUpPage;

export const setPage = (pageCode: EPages): void => {
  currentPage = pageCode;
};

export { currentPage };
