import React from 'react';
import {Link} from 'react-router-dom';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
var strip_tags = require("strip_tags");
import { DataGrid, GridColumn, NumberBox, ComboBox } from 'rc-easyui';

const TablePage = (props) => {

  

  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      fill: grey500
    },
    columns: {
      id: {
        width: '10%',
        fontSize: '18px'
      },
      name: {
        width: '40%',
        fontSize: '18px'
      },
      price: {
        width: '20%',
        fontSize: '18px'
      },
      category: {
        width: '20%',
        fontSize: '18px'
      },
      edit: {
        width: '10%'
      }
    }
  };

  var nav = 'Inicio / ' + props.title;

  return (
    <PageBase title={props.title}
              navigation={nav}>

    <div>
      
      <DataGrid filterable data={props.data} style={{ /*height: 750*/ }}>
        <GridColumn field="status" title="Tweet" width="70%"></GridColumn>
        <GridColumn field="user" title="Usuario" />
        <GridColumn field="created_at" title="Fecha" />
      </DataGrid>
        </div>
    </PageBase>
  );
};

export default TablePage;
