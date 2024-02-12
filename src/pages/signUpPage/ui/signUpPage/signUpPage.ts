import { signUpForm } from '@/widgets/signUpForm';
import { centerContentLayout } from '@/layouts/centerContentLayout/ui';

export const signUpPage = (): THtml => centerContentLayout({ content: signUpForm() });
