import { loginForm } from '@/widgets/logInForm';
import { centerContentLayout } from '@/layouts/CenterContentLayout';

export const logInPage = (): THtml => centerContentLayout({ content: loginForm() });
