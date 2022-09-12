import {Datagrid, EmailField, List, TextField, UrlField} from 'react-admin';

export const ClassesList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" reference="classes" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <EmailField source="blog" />
      <TextField source="hide" />
      <TextField source="defaultStartTime" />
      <TextField source="defaultEndTime" />
      <TextField source="defaultInvoiceItem" />
      <TextField source="defaultHoursPerDay" />
      
    </Datagrid>
  </List>
);

export const ClassesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextField disabled source="id" reference="classes" />
      <TextInput source="name" />
      <TextInput source="shortName" />
      <TextInput source="school" />
      <TextInput source="blog" />
      <BooleanInput label="hide" source="hide" defaultValue={0} />
      <TextInput source="defaultStartTime" />
      <TextInput source="defaultEndTime" />
      <TextInput source="defaultInvoiceItem" />
      <TextInput source="defaultHoursPerDay" />
      
    </SimpleForm>
  </Edit>
);

export const ClassesCreate = () => (
  <Create {...props}>
    <SimpleForm>
      <TextField disabled source="id" reference="classes" />
      <TextInput source="name" />
      <TextInput source="shortName" />
      <TextInput source="school" />
      <TextInput source="blog" />
      <BooleanInput label="hide" source="hide" defaultValue={0} />
      <TextInput source="defaultStartTime" />
      <TextInput source="defaultEndTime" />
      <TextInput source="defaultInvoiceItem" />
      <TextInput source="defaultHoursPerDay" />
      
    </SimpleForm>
  </Create>
);