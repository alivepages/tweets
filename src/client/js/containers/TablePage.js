import React from 'react';
import {Link} from 'react-router-dom';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';

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


        <Table>
          <TableHeader>
            <TableRow style={{'fontSize':'18px'}}>
              <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.name}>Tweet</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.price}>Usuario</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.category}>Fecha</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.edit}></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.guests
              .filter(item => {
                console.log(item);
                var name = item.status.toLowerCase();
                var key = props.searchKey.toLowerCase();
                return (key == '' || name.indexOf(key) >= 0)
              })
              .map(item =>
              <TableRow key={item.id}>
                <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{item.status}</TableRowColumn>
                <TableRowColumn style={styles.columns.price}>{item.user}</TableRowColumn>
                <TableRowColumn style={styles.columns.category}>{item.created_at}</TableRowColumn>
                <TableRowColumn style={styles.columns.edit}>

                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </PageBase>
  );
};

export default TablePage;
