import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as RepositoriesActions from '../../store/actions/repositories';
import {Container} from './style';
import {ActivityIndicator, Text} from 'react-native';

class Repositories extends Component {
  componentDidMount() {
    const {loadRepositoriesRequest} = this.props;
    loadRepositoriesRequest();
  }
  render() {
    const {data, loading} = this.props;
    return (
      <Container>
        {loading ? (
          <ActivityIndicator size="small" color="#999" />
        ) : (
          data.map(repository => (
            <Text key={repository.id}>{repository.name}</Text>
          ))
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  data: state.repositories.data,
  loading: state.repositories.loading,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
