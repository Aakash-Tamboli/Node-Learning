function List(props)
{
const {list} = props;
return (
<div>
{list.map((element,index) => {
return <li key={element}>{element}</li>
})}
</div>
);
}
export default List;
