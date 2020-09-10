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
import moment from 'moment';

class TablePage extends React.Component {

  renderDetail({ row }) {
    return (
      <div className="item f-row">
        <div className="f-column">
          <div className="item-desp f-full">Id: {row.id}</div>
          <div className="item-desp f-full">Tweet: {row.status}></div>
          <div>....</div>
          <div className="item-desp f-full">Screen Name: {row.screen_name}</div>
          <div className="item-desp f-full">Reetweet Count: {row.retweet_count}</div>
          <div className="item-desp f-full">Favorite Count: {row.favorite_count}</div>
          <div className="item-desp f-full">Source: {row.source}</div>
        </div>
      </div>
    )
  }


render() {

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

  var nav = 'Inicio / ' + this.props.title;

  return (
    <PageBase title={this.props.title}
              navigation={nav}>

    <div>
      
      <DataGrid filterable data={this.props.data} renderDetail={this.renderDetail}  style={{ /*height: 750*/ }}>
        <GridColumn expander width="30px"></GridColumn>
        <GridColumn field="status" title="Tweet" width="70%"></GridColumn>
        <GridColumn field="user" title="Usuario" />
        <GridColumn field="created_at" title="Fecha" 
                    render={({ row }) => (
                        <div>{row.created_at ? moment(row.created_at).format('DD/MM/YY hh:mm') : ''}</div>
                    )}
        />
      </DataGrid>
        </div>
    </PageBase>
  );
};
}

export default TablePage;
