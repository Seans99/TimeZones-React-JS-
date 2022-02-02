import FavoriteItem from "./FavoriteItem";

export default function FavoriteList(props) {
  let { stateList, setAndSaveItems } = props;

 // state list from localstorage.
 // add index location for remove button.
  if (stateList != []) {
   
    const itemRows = [];
    for (let item of stateList) {
      const row = (
        <FavoriteItem
          key={item.id}
          {...{
            city: item.city,
            utc: item.timezone,
            indexId: stateList.indexOf(item),
          }}
          setAndSaveItems={setAndSaveItems}
          stateList={stateList}
        />
      );
      itemRows.push(row);
    }

    return <>{itemRows}</>;
  }
}
