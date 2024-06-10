function Dot({ color }) {
    return (
        <div style={{
            display: 'inline-block',
            borderRadius: '50%', 
            backgroundColor: color, 
            height: '20px', 
            width: '20px', 
            border: '1px solid black'
        }}></div>
    )
}

export default Dot;