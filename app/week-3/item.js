export default function Item(props){
    return(
        <li className="m-2 w-1/4 px-1 py-1 border-3 border-green-500 text-center text-green-600 rounded-lg hover:bg-green-500 hover:text-white transition duration-300">
            <h3>{props.item.name}</h3>
            <p>Get {props.item.quantity} from {props.item.category}</p>
        </li>
    )
}