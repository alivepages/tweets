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





<div className="post-container">
  
  <div className="chart table-chart   medium table-responsive rivaliq-popover" data-original-title="" title=""><table className="table table-double-header x-metric-table table-fix">

  <thead><tr>
      <th className="post-tag-checkbox-cell post-tag-selectall">
      <div className="post-tag-checkbox"><label className="pointer"><input type="checkbox" id="post-tag-apply-SELECTALL" data-post-id="SELECTALL"/></label></div></th><th data-order-by="0" data-sort-order="" data-toggle="" title="Published At" data-content="" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-published-at post-published-timezone string-metric-header-cell x-sort pointer"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Published At</div></div></div>
      </th>
      <th data-order-by="1" data-sort-order="" data-toggle="" title="Post" data-content="" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-post post-primary-column metric-header-cell"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Post</div></div></div></th><th data-order-by="2" data-sort-order="" data-toggle="popover" title="" data-content="<p>The total number of likes, retweets, and replies on this published tweet.</p>" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-engagement-total  metric-header-cell x-sort pointer rivaliq-popover" data-original-title="Engagement Total"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Eng. Total</div></div></div></th><th data-order-by="3" data-sort-order="1" data-toggle="popover" title="" data-content="<p>The total number of interactions (likes, retweets, replies) per follower on this post, expressed as a percentage.</p>" data-trigger="hover" data-container="body" data-placement="auto" data-html="" className="measure-engagement-rate  metric-header-cell x-sort pointer sort-active rivaliq-popover" data-original-title="Engagement Rate By Follower"><div className="th-content-wrapper"><div className="table-cell cell-middle"><div className="ellipse-content">Eng...</div></div><div className="table-cell cell-middle sortable text-right sort-desc"></div></div></th></tr></thead>
      
      <tbody>
        <tr className="x-data-row pointer unexpandable" data-index="0">
          <td className="post-tag-checkbox-cell">
            <div className="post-tag-checkbox">
            <label className="pointer">
              <input type="checkbox" id="post-tag-apply-0.3284662376" data-post-id="0.3284662376" />
            </label>
            </div>
          </td>
          
          <td className="">
            <div><div className="post-published-timezone"><strong>Aug 28 2020</strong><div className="text-muted small">1:50 AM UTC</div></div></div>
          </td>
          
          <td className="post-overview">
            ,. <div className="post-left"><div className="company-thumbnail-container-sm"><img src="https://pbs.twimg.com/profile_images/1072640385661444098/3K25BWDr.jpg"  className="img-armed company-thumbnail-sm"/></div><ul className="post-meta-list-sm"><li><div className="channel-pill twitter"></div></li></ul></div><div className="post-body"><div className="post-content"><div className="post-image"><img src="https://pbs.twimg.com/media/EgeNS1vWkAE7Uet.jpg"  className="img-armed post-image-sm" postid="0.3284662376" last_pull_attempt_at="2020-09-02T21:11:19.954+00:00"/></div><div className="post-author"><a href="/company/632421" className="focus-company-link">maria_ariza</a>
&nbsp;<span className="small text-muted">@maria_ariza</span>
</div><p>Un pequeño tuit nocturno para brindar por todas las mamás trabajadoras. Está duro pero vamos día a día <img className="emoji" draggable="false" alt="🙌" src="https://d2iu170dn22j77.cloudfront.net/twemoji/2/72x72/1f64c.png"/><img className="emoji" draggable="false" alt="🙏" src="https://d2iu170dn22j77.cloudfront.net/twemoji/2/72x72/1f64f.png"/> pic.twitter.com/rwQd5QJcI5</p></div><ul className="post-actions list-inline x-export-hide"><li><a href="https://twitter.com/maria_ariza/status/1299162378790150145" target="_blank" className="small text-muted"><i className="fa fa-fw fa-external-link"></i>View on Twitter</a></li></ul><div id="0_3284662376" className="post-tag-pills"><div><div className="add-post-tag-container"><div><button className="add-post-tag-btn post-tag-action-btn btn dropdown-toggle btn-default x-export-hide"><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-tags"></i></button></div></div>
</div></div></div></td><td className="metric-table-cell"><div data-toggle="popoverCell" data-content="<div className=&quot;widget-insights-summary-tooltip columnar clearfix&quot;><div className=&quot;pull-left&quot;><p className=&quot;metric-label word-break-word&quot;>Engagement Total</p><h1 className=&quot;metric-value&quot;>667</h1></div></div>" className="rivaliq-popover" data-original-title="" title="">667</div></td><td className="metric-table-cell"><div data-toggle="popoverCell" data-content="<div className=&quot;widget-insights-summary-tooltip columnar clearfix&quot;><div className=&quot;pull-left&quot;><p className=&quot;metric-label word-break-word&quot;>Engagement Rate By Follower</p><h1 className=&quot;metric-value&quot;>3.94%</h1></div></div>" className="rivaliq-popover" data-original-title="" title="">3.94%</div></td></tr>

</tbody></table></div></div>

    </PageBase>
  );
};
}

export default TablePage;
