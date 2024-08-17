import Maincss from './main.module.css';
import Header  from './header';
export default function Main(props){
    return(
        <div>
        <Header></Header>        
        <div className={Maincss.container}>
            {
                props.items.map((val,index)=>
                    val.availability ?
                        <div key={index} className={Maincss.availabiliy}>
                            <img src={val.img} height={"200px"} alt="Loading"></img>
                            <p>{val.description}</p>
                            <button>Buy Now</button>
                        </div>
                        :
                        <div key={index} className={Maincss.notavailability}>
                            <img src={val.img} height={"200px"} alt="Loading"></img>
                            <p>{val.description}</p>
                            <button disabled>Not Available</button>
                        </div>
                )
            }
        </div>
        </div>
        )
    
}