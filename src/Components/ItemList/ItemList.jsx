import ItemP from "../ItemP/ItemP";
const ItemList = ({ items }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-evenly",
        alingItems: "center",
        flexWrap:"wrap"
      }}
    >
      {items.map((element) => {
        return <ItemP key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
