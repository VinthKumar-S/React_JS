//import './style.css';
import styled from './style.module.css';

function Header(){
    return (
        <div className={styled.header}>
            <img
                src="https://cdn.kinocheck.com/i/d3mx9y2anl.jpg"
                class="img-fluid rounded-top"
                alt=""
            />
            
        </div>
    );
}

function Main(){
    return (
        <div className={styled.main}>
            <p>
                Deadpool has dreamed of becoming an Avenger for years - and now the shady TVA agent Mr. Paradox offers him the chance to switch to the sacred timeline and become part of the MCU. But the cheeky mercenary has to make a big sacrifice: His world will be wiped out. Because Deadpool won't let this happen, Mr. Paradox sends him and a washed-up version of Wolverine recruited by Deadpool into the Void - the great dumping ground of all universes. There, the sinister Cassandra Nova has established a regime of terror. Deadpool knows that if he wants to save his world, all his friends and his great love Vanessa, he has to get past her and stop Mr. Paradox. But first he has to convince the embittered Wolverine to help him...
            </p>
            {false?<button>Buy Now</button> :<button disabled>Not Available</button>}
        </div>
    );
}

function Footer(){
    <div className={styled.footer}>

    </div>
}

export{Header,Main,Footer};