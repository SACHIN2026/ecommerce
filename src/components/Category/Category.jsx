import "./Category.scss";
import { useParams } from "react-router-dom";
import Products from "../Products/Products"
import UseFetch from "../../hooks/UseFetch";
const Category = () => {
    const { id } = useParams();
    const { data } = UseFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;
