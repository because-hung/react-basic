import Item from './Item'

// const arr = [ 1 , 2 , 3]

const List = ({listData}) =>{
    console.log('listData',listData);
    return  <div className="list">
        {/* {
            arr.map(item => <div>{item}</div>)
        } */}
        {
            listData.map(item =><Item key={item} />)
        }
       

    </div>
    }
    
    export default List