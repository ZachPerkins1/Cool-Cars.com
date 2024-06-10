function Dot({ color }) {
    return (
        <div style={{
            display: 'inline-block',
            borderRadius: '50%', 
            backgroundColor: color, 
            height: '20px', 
            width: '20px', 
            border: '2px solid black',
            marginLeft: '50px'
        }}></div>
    )
}

export default Dot;