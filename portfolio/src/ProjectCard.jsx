import "./ProjectCard.css"

export default function ({name, image, description}) {
    return(
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt="" style={{width:"470px"}}/>
            <p>{description}</p>
        </div>
    )
}