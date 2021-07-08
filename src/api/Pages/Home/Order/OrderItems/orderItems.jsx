import '../Styles/items.css'
import SVG_delete from '../../../../assets/svg/SVG_delete'

const OrderItems = () => {
    return (
        <div className="items_grid">
            <img src="http://localhost:8000/img/2769929.png" alt="" className="logo" />
            <div className="text">
                <p>Hello World</p>
            </div>
            <input className="count" type="text" />
            <p className="price">$4.5</p>
            <input className="comment" type="text" placeholder="U can add a comment" />
            <div className="delete" >
                <SVG_delete />
            </div>
        </div>
    )
}
export default OrderItems