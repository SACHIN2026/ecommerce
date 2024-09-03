import { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import { useNavigate } from "react-router-dom";
import UseFetch from "../../../hooks/UseFetch";
const Search = ({ setSearchModal }) => {

    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    let { data } = UseFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)

    if (!query.length) {
        data = null;
    }
    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose onClick={() => setSearchModal(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {data?.data?.map(item => {
                        <div key={item.id} className="search-result-item" onClick={()=>{
                            navigate("/product/" + item.id)
                            setSearchModal(false)
                        }}>
                        <div className="img-container">
                            <img src={import.meta.env.VITE_DEV_URL +
                                item.attributes.img.data[0].attributes.url} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item.attributes.title}</span>
                            <span className="desc">{item.attributes.desc}</span>
                        </div>
                    </div>
                    })}
                    
                </div>
            </div>
        </div>
    );
};

export default Search;
