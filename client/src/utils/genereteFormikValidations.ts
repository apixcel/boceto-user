import * as Yup from "yup";
interface BankAccountData {
  nombre: string;
  banco: string;
  cbu: string;
  alias: string;
}
type SchemaFields = {
  [fieldName: string]: Yup.StringSchema<string> ;
};
export const generateValidationSchema = (numLenders: number) => {
  const schemaFields: SchemaFields = {};
  for (let i = 0; i < numLenders; i++) {
    if (i > 0) {
      schemaFields[`nombre${i + 1}`] = Yup.string().required(
        "You must enter the nombre"
      );
      schemaFields[`banco${i + 1}`] = Yup.string().required(
        "You must enter the banco"
      );
      schemaFields[`cbu${i + 1}`] = Yup.string().required(
        "You must enter the cbu"
      );
      schemaFields[`alias${i + 1}`] = Yup.string().required(
        "You must enter the alias"
      );
    } else {
      schemaFields[`nombre`] = Yup.string().required(
        "You must enter the nombre"
      );
      schemaFields[`banco`] = Yup.string().required("You must enter the banco");
      schemaFields[`cbu`] = Yup.string().required("You must enter the cbu");
      schemaFields[`alias`] = Yup.string().required("You must enter the alias");
    }
  }
  return Yup.object().shape(schemaFields);
};

export const generateInitValue = (
  numLenders: number,
  feilds: BankAccountData[]
) => {
  const initialValues: Record<string, unknown> = {};
  for (let i = 0; i < numLenders; i++) {
    if (i > 0) {
      initialValues[`nombre${i + 1}`] = feilds[i]?.nombre || "";
      initialValues[`banco${i + 1}`] = feilds[i]?.banco || "";
      initialValues[`cbu${i + 1}`] = feilds[i]?.cbu || "";
      initialValues[`alias${i + 1}`] = feilds[i]?.alias || "";
    } else {
      initialValues[`nombre`] = feilds[i]?.nombre || "";
      initialValues[`banco`] = feilds[i]?.banco || "";
      initialValues[`cbu`] = feilds[i]?.cbu || "";
      initialValues[`alias`] = feilds[i]?.alias || "";
    }
  }
  return initialValues;
};
