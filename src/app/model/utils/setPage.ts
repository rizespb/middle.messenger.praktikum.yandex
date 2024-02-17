import { EPages } from '@/shared/constants';

let currentPage = EPages.SandboxPage;

export const setPage = (pageCode: EPages): void => {
  currentPage = pageCode;
};

export { currentPage };
