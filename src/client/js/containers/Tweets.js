import React from 'react';
import request from 'superagent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';
import TablePage from './TablePage';
import { DataGrid, GridColumn, NumberBox, ComboBox } from 'rc-easyui';


class Tweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navDrawerOpen: false,
      searchKey: ''
    };
    this.getData();
    /*
    this.state = {
      data: this.getData(),
      operators: ["nofilter", "equal", "notequal", "less", "greater"],
      status: [
        { value: null, text: "All" },
        { value: "P", text: "P" },
        { value: "N", text: "N" }
      ]
    }
    */
  }

  componentWillMount() {
    var inlog = localStorage.getItem('gc_token');
    if (!inlog) {
      window.location.href='/login';
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleSearch(value) {
    this.setState({
      searchKey: value
    });
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  getData() {
    this.setState({
      data: [],
      loading: true
    })
    const URL = '/api/v1/tweets';
    request
      .get(URL)
      .then(data => {
        this.setState({
          data: data.body,
          loading: false
        });
      }
/*
    return [
      { "code": "FI-SW-01", "name": "Koi", "unitcost": 10.00, "status": "P", "listprice": 36.50, "attr": "Large", "itemid": "EST-1" },
      { "code": "K9-DL-01", "name": "Dalmation", "unitcost": 12.00, "status": "P", "listprice": 18.50, "attr": "Spotted Adult Female", "itemid": "EST-10" },
      { "code": "RP-SN-01", "name": "Rattlesnake", "unitcost": 12.00, "status": "N", "listprice": 38.50, "attr": "Venomless", "itemid": "EST-11" },
      { "code": "RP-SN-01", "name": "Rattlesnake", "unitcost": 12.00, "status": "N", "listprice": 26.50, "attr": "Rattleless", "itemid": "EST-12" },
      { "code": "RP-LI-02", "name": "Iguana", "unitcost": 12.00, "status": "P", "listprice": 35.50, "attr": "Green Adult", "itemid": "EST-13" },
      { "code": "FL-DSH-01", "name": "Manx", "unitcost": 12.00, "status": "N", "listprice": 158.50, "attr": "Tailless", "itemid": "EST-14" },
      { "code": "FL-DSH-01", "name": "Manx", "unitcost": 12.00, "status": "P", "listprice": 83.50, "attr": "With tail", "itemid": "EST-15" },
      { "code": "FL-DLH-02", "name": "Persian", "unitcost": 12.00, "status": "N", "listprice": 23.50, "attr": "Adult Female", "itemid": "EST-16" },
      { "code": "FL-DLH-02", "name": "Persian", "unitcost": 12.00, "status": "P", "listprice": 89.50, "attr": "Adult Male", "itemid": "EST-17" },
      { "code": "AV-CB-01", "name": "Amazon Parrot", "unitcost": 92.00, "status": "P", "listprice": 63.50, "attr": "Adult Male", "itemid": "EST-18" }
    ]
    */
      )}

  render() {

    let { navDrawerOpen, guests, loading } = this.state;
    const paddingLeftDrawerOpen = 236;

    navDrawerOpen = true; //temp

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (

      <MuiThemeProvider muiTheme={ThemeDefault}>
      <div>
        <Header styles={styles.header}/>

          <LeftDrawer navDrawerOpen={navDrawerOpen}
                      menus={Data.menus}
                      username="Admin"/>

          <div style={styles.container}>
            

        <div>
  
        <DataGrid filterable data={this.state.data} style={{ /*height: 750*/ }}>
          <GridColumn field="status" title="Tweet" width="70%"></GridColumn>
          <GridColumn field="user" title="Usuario" align="right" />
          <GridColumn field="created_at" title="Fecha" align="right"/>
        </DataGrid>
          </div>
          </div>
      </div>
    </MuiThemeProvider>
    );
  }
}
 
export default withWidth()(Tweets);