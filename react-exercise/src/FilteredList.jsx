import { useMemo } from "react";

const FilteredList = ({list}) => {

const checkList = useMemo(() => {return list.filter((x) => x.age>=18)},[list]) 

  return <div>
            <ul>
                {checkList.map((x)=> <li>{x.name} {x.age} id:{x.id}</li>)}
            </ul>
        </div>;
};

export default FilteredList;