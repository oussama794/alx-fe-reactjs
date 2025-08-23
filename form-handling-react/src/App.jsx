import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm"

export default function App() {
  return (
    <div className="flex flex-col gap-10 items-center py-10">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}
