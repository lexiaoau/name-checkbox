import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const styledBy = (property, mapping) => props => mapping[props[property]];

const StyledButton = withStyles({
  root: {
    background: styledBy('color', {
      default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    }),
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 40,
    padding: '0 15px',
    boxShadow: styledBy('color', {
      default: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    }),
  },
})(({ classes, color, ...other }) => <Button className={classes.root} {...other} />);

class CusStyleComp extends React.Component {
  state = {
    isChecked: false,
    color: 'default',
  };

  handleChange = event => {

    this.setState({ 
      isChecked: event.target.checked,
      color: (this.state.color === 'default' ? 'blue' : 'default')
    });

    if( event.target.checked )
    {
        this.props.handleChildCheck( this.props.passValue)
    }
    else{
      this.props.handleChildUncheck( this.props.passValue)
    }
  }; 

  render() {
    return (
      <div className="column">
        <div className="right floated content">
          <React.Fragment>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={this.handleChange}
                />
              }
            />  
              <div className="content">
                  <StyledButton color={this.state.color}>{this.props.passValue}</StyledButton>  
              </div>  
          </React.Fragment>
        </div>
      </div>
     
    );
  }
}

export default CusStyleComp;












