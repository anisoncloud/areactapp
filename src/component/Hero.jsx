
const Hero = (props) => {
    return (
        <div>
            {props.title}<br/>
            {props.item.name}<br/>
            {props.item.age}<br/>
            {props.item.city}<br/>
            <button onClick={props.heroBtnClick}>Click Me to see Action</button><br/>
            <button onClick={()=>{
                alert("Say Good bye");
            }} >Button Action</button>
            <img src="https://as1.ftcdn.net/jpg/03/11/47/90/1000_F_311479025_ojlyNnE8Iqd9KVa0hNHH95FTzSuSN9B2.jpg"/>
        </div>
    );
};

export default Hero;