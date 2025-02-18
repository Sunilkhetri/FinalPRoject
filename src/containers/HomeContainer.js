import Home from '../components/Home'
import { connect } from 'react-redux';
import {addToCart, removeToCart} from '../services/Actions/Action'
const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;