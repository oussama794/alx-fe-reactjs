import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-sm mx-auto border rounded-md shadow">
      <h2 className="text-xl font-bold">Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Registered User:", values);
          resetForm();
        }}
      >
        <Form className="flex flex-col gap-4">
          <div>
            <Field
              name="username"
              type="text"
              placeholder="Username"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="border p-2 rounded w-full"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
