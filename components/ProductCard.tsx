interface props {
    product: {
        name: string
        price: number
    }
}

export default function ProductCard({product}: props) {
    return <div className="card cell">
        <div className="card-image">
            <figure className="image is-4by3">
                <img
                    src="https://bulma.io/assets/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                />
            </figure>
        </div>


        <div className="card-content">
            <div className="media">
                <div className="media-content">
                    <p className="is-size-4"> {product.name} </p>
                    <p className=" is-size-3">$ {product.price} </p>       
                    
                </div>

                <a className="button is-primary" href="#">Buy</a>


            </div>
            
            <div className="content">
            </div>
        </div>
    </div>
}