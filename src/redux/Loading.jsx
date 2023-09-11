import React from "react";
import { connect } from "react-redux";
import { loadUsers } from "./action";
class UsersWithReduxSaga extends React.Component {
    componentDidMount() {
        this.props.loadUsers()
        console.log(this.props.loadUsers(), 'DDDDDDDDD')
    }
    render() {
        if (this.props.loading) {
            return <div>Loading</div>
        }
        if (this.props.error) {
            return <div>ERROR</div>
        }
        return (<></>)
    }
}

const mapStateToProps = state => ({
    data: state.reduxSaga.data,
    loading: state.reduxSaga.loading,
    error: state.reduxSaga.error,
})
const mapDispatchToProps = {
    loadUsers
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersWithReduxSaga);