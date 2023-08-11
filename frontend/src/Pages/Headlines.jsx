
import { Link } from "react-router-dom";
function Headlines({ newsItem }) {
    const renderFormattedContent = (htmlContent) => {
        if (typeof htmlContent !== 'string') {
          return null;
        }
        return { __html: htmlContent };
      };
    if (!newsItem)
        return null;
    return (
        <>

            <div class=" ccar card my-4 " key={newsItem._id} style={{ marginRight: '20%' }} >
                <div class="row no-gutters">
                    <div class="col-sm-3">
                        <img class="card-img" height="200px" width="50%" src={newsItem.imageUrl} alt="Suresh Dasari Card" />
                    </div>
                    <div class="col-sm-9">
                        <div class="card-body">
                            <h4 class="card-title">{newsItem.title}</h4>
                            {/* <p class="card-text truncate m-0">{newsItem.content}</p> */}
                            <p className="card-text truncate m-0">
                                <div dangerouslySetInnerHTML={renderFormattedContent(newsItem.content)} />
                            </p>
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