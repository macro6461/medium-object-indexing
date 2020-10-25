const SelectedItem = ({item}) =>{
    return (
        <div>
            <h1>Current Item</h1>
            <div className='selected' style={{border: 'solid 5px ' + item.color}}>
                <p>Id: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Created: {item.createdAt}</p>
            </div>
        </div>
    )
}

export default SelectedItem;