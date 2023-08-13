import { useForm, FormProvider } from 'react-hook-form';

interface Props {
  children: React.ReactNode;
  onSubmit: (data: object) => void;
}

export default function CrmForm({ children, onSubmit }: Props) {
  const createUserForm = useForm();

  const { handleSubmit } = createUserForm;

  return (
    <FormProvider {...createUserForm}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
