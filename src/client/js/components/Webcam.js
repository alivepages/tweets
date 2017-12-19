import React from 'react';
import Webcam from 'react-webcam';
import RaisedButton from 'material-ui/RaisedButton';

export default class webc extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          screenshot: null,
          tab: 0
        };
        this.capture = this.capture.bind(this);
      }
      capture(){
        const screenshot = this.webcam.getScreenshot();
        this.setState({ screenshot });
        this.props.handleCapture(screenshot);
      }
      render() {
        return (
          <div>
            <h2>Fotografía:</h2>
            <div className='webcams'>
              <Webcam
                audio={false}
                width={this.props.width}
                height={this.props.height}
                ref={node => this.webcam = node}
              />
            </div>
            <div>
              <div className='screenshots' className="screenshot">

                <RaisedButton label="Capturar"
                              type="button"
                              onClick={this.capture}
                              primary={false}/>

                {this.state.screenshot ? <img src={this.state.screenshot} /> : null}

              </div>
            </div>
          </div>
        );
      }
    }
