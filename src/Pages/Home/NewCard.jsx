 
import { Link } from 'react-router-dom';

const NewCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
   
    return (
        <div className="card bg-base-100 shadow-xl px-8 pb-8 gap-4 mb-16">
            <div className=" ">
                <h2 className="card-title">{title}</h2>
            </div>
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            {
                details.length > 200
                    ? <p>{details.slice(0, 200)} <Link
                        to={`/news/${_id}`} className='text-[#FF8C47]'> Read More.....</Link></p>
                    : <p>{details}</p>

            }
        </div>
    );
};

export default NewCard;