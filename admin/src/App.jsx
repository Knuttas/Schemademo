// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList } from './posts';
import { PostEdit } from "./post-edit";
import { PostCreate} from "./post-create";
import { UserList } from './users';
import { SchoolList } from './schools';
import { TeacherList } from './teachers';
import { ClassesList } from './classes';
//import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from "./Dashboard";
import simpleRestProvider from 'ra-data-simple-rest';

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// <Resource name="users" list={ListGuesser} />

const dataProvider = simpleRestProvider('/data');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="teachers" list={TeacherList} icon={UserIcon} />
    <Resource name="schools" list={SchoolList} icon={UserIcon} />
    <Resource name="classes" list={ClassesList} icon={UserIcon} />
  </Admin>
);

export default App;