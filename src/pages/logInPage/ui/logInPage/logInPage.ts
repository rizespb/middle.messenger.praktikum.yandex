import { loginForm } from '@/widgets/logInForm';
import { centerContentLayout } from '@/layouts/centerContentLayout';

export const logInPage = (): THtml => centerContentLayout({ content: loginForm() });
