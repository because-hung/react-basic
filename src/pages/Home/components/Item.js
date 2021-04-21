const Item = ({ id, note, date, time, deleteData }) => {
  function deleteItem(){
    deleteData(function(prev){
      console.log(id);
  return prev.filter(item=> item.id !== id)

    })
  }
  return (
    <div className="item">
      <p>{note}</p>
      <p>{`${date} ${time}`}</p>
      <p>{id}</p>

      <button onClick={deleteItem} className="remove">delete</button>
    </div>
  );
};

export default Item;
