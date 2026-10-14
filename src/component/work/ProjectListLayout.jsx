const ProjectListLayout = ({ num, title,children }) => {
  return (
    <div className="list-layout">
        <div className="num">{num}</div> 
        <div className="tit">
            <h4>{title}</h4>
        </div>
        <div className="content">
            {children}
        </div>
    </div>
  )
}

export default ProjectListLayout