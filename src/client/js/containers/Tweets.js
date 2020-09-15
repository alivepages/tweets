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
    const URL = 'https://api.rivaliq.com/v3/landscapes/147398/socialPosts?timePeriod=thisMonth&apiKey=3fe2ee1c-7f81-4dca-b80e-76d84746ad34';
    //timePeriod=thisMonth&apiKey=3fe2ee1c-7f81-4dca-b80e-76d84746ad34';
    request
      .get(URL)
      .set('Content-Type', 'application/json')
      //.query({ 'timePeriod': 'thisMonth', 'apiKey': '3fe2ee1c-7f81-4dca-b80e-76d84746ad34' })
      .then(data => {
        this.setState({
          data: data.body,
          loading: false
        })
        
      })
      .catch(error => console.log(error.message));
    }

  render() {

    let { navDrawerOpen, data, loading } = this.state;
    const paddingLeftDrawerOpen = 236;

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
            

          <TablePage title="Tweets" data={data}/>
          </div>
      </div>
    </MuiThemeProvider>
    );
  }
}
 
export default withWidth()(Tweets);