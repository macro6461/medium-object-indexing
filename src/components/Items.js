import {useState, useEffect} from 'react';
import '../App.css';
import SelectedItem from './SelectedItem';
import items from '../items.json';

const Items = () =>{

    const [itemsMap, setTodosMap] = useState(null)
    const [item, setItem] = useState(items[0])

    useEffect(()=>{
        var map = new Object();
        items.forEach(x=>{
            map[x.id] = x
        })
        setTodosMap(map)
    }, [items])

    const onChangeItem = (e)=>{
        var id = e.target.value 
        //use below to find item WITHOUT indexing
        //findItem(id)
        //use below to find item WITH indexing
        setItem(itemsMap[id])
    }

    const findItem = (id) =>{
        var newItem = items.find(x=>x.id === id)
        setItem(newItem)
    };

    return (<div>
        Items: <select style={{width: 200}} value={item.id} onChange={onChangeItem}>
        {items.map(x=>{
          return <option key={x.id} value={x.id}>{x.name}</option>
        })}
        </select>
      <SelectedItem item={item}/>
      </div>);
    
};

export default Items;