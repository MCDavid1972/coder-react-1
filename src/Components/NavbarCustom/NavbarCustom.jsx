
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../fireBaseConfig";
import NavbarComponent from "./NavbarComponent";

const NavbarCustom = () => {
  
  const [categoryList, setCategoryList] = useState([]);
  

  useEffect(() => {
    const itemsColecction = collection(db, "category");
    getDocs(itemsColecction).then((res) => {
      let arrayCategorys = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategorys);
      
    });
  }, [categoryList]);

  return (
    <NavbarComponent categoryList= {categoryList}/>
  );
};

export default NavbarCustom;
