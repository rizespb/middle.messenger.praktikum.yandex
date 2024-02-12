import { EPages } from '@/shared/constants';

let currentPage = EPages.ProfilePage;

export const setPage = (pageCode: EPages): void => {
  currentPage = pageCode;
};

export { currentPage };
