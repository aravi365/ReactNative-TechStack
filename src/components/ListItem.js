import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection } from './common/CardSection';
import { Text,
     TouchableWithoutFeedback,
      View,
    LayoutAnimation,
    UIManager
} from 'react-native';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
       UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }
    

    renderDescription () {
        
        const{ library,expanded } =this.props;
      
        if(expanded) {
            console.log("yooo");
            return (
                <CardSection>
                <Text style={{flex:1}}>
                {library.description}
                 </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } =styles;
        const { id, title } = this.props.library;
        //console.log(this.props);
    return(
    <TouchableWithoutFeedback
    onPress={() => this.props.selectLibrary(id)}
    >
     <View>
        <CardSection>
            <Text style={titleStyle}>
            {title}
            </Text>
        </CardSection>
        { this.renderDescription() }
    </View>
    </TouchableWithoutFeedback>
        );
    }
}

const styles = {
   titleStyle: {
       fontSize:18,
       paddingLeft:15,

    }
};
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);