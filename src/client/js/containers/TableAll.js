import React from 'react';
import {Link} from 'react-router-dom';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';

const TableAll = (props) => {

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
        <Link to="/visit/0" >
          <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>

        <Table>
          <TableHeader  style={{backgroundColor:'rgb(30, 136, 229)'}}>
            <TableRow>
              <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.name}>Nombre</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.name}>Hora de entrada</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.price}>Empresa</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.category}>Identficación</TableHeaderColumn>
              <TableHeaderColumn style={styles.columns.edit}></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.guests
              .filter((item, index) => {
                var horas = [
                  '10/12/2017 17:34 ',
                  '9/12/2017 15:11 ',
                  '9/12/2017 13:24 ',
                  '9/12/2017 10:15 ',
                  '9/12/2017 9:05 ',
                  '9/12/2017 9:04 ',
                  '8/12/2017 17:35 ',
                  '8/12/2017 17:30 ',
                  '8/12/2017 16:00 ',
                  '','','','','','','','','','','',''
                ]
              if (index == 0) {
                var fecha= new Date()
                item.hora = '10/12/2017 ' + fecha.getHours() + ':' + fecha.getMinutes();
              } else {
                item.hora = horas[index];
              }
                var name = item.name.toLowerCase();
                var key = props.searchKey.toLowerCase();
                return (key == '' || name.indexOf(key) >= 0)
              })
              .map((item, index) =>
              <TableRow key={item.id}>
                <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{item.hora}</TableRowColumn>
                <TableRowColumn style={styles.columns.price}>{item.company}</TableRowColumn>
                <TableRowColumn style={styles.columns.category}>{item.identifyNumber}</TableRowColumn>
                <TableRowColumn style={styles.columns.edit}>
                  <Link className="button" to="/visit/0">
                    <FloatingActionButton zDepth={0}
                                          mini={true}
                                          backgroundColor={grey200}
                                          iconStyle={styles.editButton}>
                      <ContentCreate  />
                    </FloatingActionButton>
                  </Link>
                </TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </PageBase>
  );
};

export default TableAll;
