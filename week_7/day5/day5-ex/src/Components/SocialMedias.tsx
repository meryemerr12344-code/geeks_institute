import data from "../data/data.json"

function SocialMedias() {
    return (
        <div className="social-medias">
            <h2>Follow us on social media!</h2>
            
            <ul>    
                {data.SocialMedias.map((socialMedia) => (
                <li>{socialMedia}</li>
                
                ))}
            </ul>
        </div>
    )
}
export default SocialMedias