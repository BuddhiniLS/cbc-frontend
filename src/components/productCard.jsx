export default function ProductCard(props){
    console.log(props)
    return(
        <div> 
            <img src={props.src}/>
            
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <butten>Add to cart</butten> 
            
        </div>
    )
    
        
    
}