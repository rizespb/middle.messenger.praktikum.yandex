import { signUpForm } from '@/widgets/signUpForm';
import { centerContentLayout } from '@/layouts/CenterContentLayout/ui';

export const signUpPage = (): THtml => centerContentLayout({ content: signUpForm() });
