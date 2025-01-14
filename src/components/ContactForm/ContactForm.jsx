import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters"),
    number: Yup.string()
      .required("Required")
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Format must be 123-45-67"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitting contact:", values); // Перевірка перед відправкою
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name:
          <Field
            type="text"
            name="name"
            className={styles.input}
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.label}>
          Number:
          <Field
            type="text"
            name="number"
            className={styles.input}
            placeholder="123-45-67"
          />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>
        <button type="submit" className={styles.submitButton}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
