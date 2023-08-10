
import { Link } from "react-router-dom";
function Headlines({ newsItem }) {
    if (!newsItem)
        return null;
    return (
        <>
            <div class=" ccar card my-4 " key={newsItem._id} >
                <div class="row no-gutters">
                    <div class="col-sm-3">
                        <img class="card-img" height="200px" width="50%" src={newsItem.imageUrl} alt="Suresh Dasari Card" />
                    </div>
                    <div class="col-sm-9">
                        <div class="card-body">
                            <h6 class="card-title">{newsItem.title}</h6>
                            <p class="card-text truncate m-0">{newsItem.content}</p>
                            <Link to={`/news-article/${newsItem.slug}`}>
                                <a href="#" class="btn btn-primary mt-2">Know More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Headlines;