import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import {addCar, removeCar} from '../redux/Actions'

// const mapStateToProps = (state) => {
//     return {
//         cars: state.cars
//     }
// }

const mapDispatchToProps = (dispatch) => {
  return {
      addCar: (car) => dispatch(addCar(car)),
      // removeCar: (index) => dispatch(removeCar(index))
  }
}

export default connect(null, mapDispatchToProps)(AddCar)