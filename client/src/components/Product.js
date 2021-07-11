import React, {useState, useEffect} from 'react';
import { socket } from '../socket';
import axios from 'axios';


const Product = ({product, owner}) => {
    const[offer, setOffer] = useState();
    const[isOffering, setIsOffering] = useState(false); // if it would be true, this client cant offer for this product until it set false.
    const[isOffered, setIsOffered] = useState(false);
    const[productByID, setProductByID] = useState([]);
    const[newestOffers, setnewestOffers] = useState(product.offers); // if a new offer received, it will be set productByID.offers. 

    // Sockets
    socket.on('offering', data => { // listening for someone offering to this product
        setIsOffering(data);
    })
    socket.on('new-offer', data => { // listening for someone offered a new offer.
        setIsOffering(false);
        setIsOffered(!isOffered); //If isOffered is changed, refresh the data for this product with axios and useEffect.
        console.log(data);
    });
    
    useEffect(() => { // If the new offer received to server, refresh the data for this product
            async function fetchProductByID() {
                const result = await axios(`http://localhost:5000/products/${product._id}`)
                console.log(result.data);
                setProductByID(result.data);
            }
            fetchProductByID()
            setIsOffering(false);
    }, [isOffered])

    useEffect(() => { // If this product refresh, then set the newestOffers. Because when received a new offer, just offers array of product changing.
        if(productByID.offers) {
            setnewestOffers(productByID.offers);
        }
        console.log(productByID)
    }, [productByID])
    useEffect(()=> {
        console.log(isOffering)
    },[isOffering])

    // Info to server giving offer by this user
    const handleKeyPress = () => {
        socket.emit('offering', true);
    }

    // Give an offer
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'http://localhost:5000/products/giveoffer',
            data: {
                offer,
                owner,
                productID: product._id
            }
        }).then((res) => {
            console.log(res);
            socket.emit('offered', true);
            e.target.reset();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>Name: {product.name}</h1>
            <h2>Owner Id: {product.owner}</h2>
            <h2>Details: {product.details}</h2>
            <h2>Offers</h2>
            {newestOffers.map((offer, i) => {
                return(
                    <div key={offer[1]+i}>
                        <p>{offer[0]} TL by {offer[1]}</p>
                    </div>
                )
            })}
            <form onSubmit={handleSubmit} style={{display: isOffering ? 'none' : 'inline-block' }}>
                <label htmlFor="offer">Give an offer</label>
                <input type="text" name="offer" onChange={(e) => setOffer(e.target.value)} onKeyPress={handleKeyPress} required /><br /><br />
                <button type="submit">Offer</button>
            </form>
            <h1>Offered{isOffered}</h1>
            <h1>Offereing{isOffering}</h1>
        </div>
    )
}
export default Product


