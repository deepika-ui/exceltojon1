import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  LongTextInput,
  Edit,
  DisabledInput,
  Create,
  DeleteButton
} from 'react-admin'

const Post_List = (props) => {
  //console.log(props);
    return(
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' label='Title' />
        <TextField source='body' label='Body' />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

  export default Post_List;