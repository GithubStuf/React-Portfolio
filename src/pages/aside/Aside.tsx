export const Aside = () => {
    return (
        <div className="aside">
            <div className="logo">
                <a href="#"><span>A</span>gent</a>
            </div>
            <div className="nav-toggler">
                <span></span>
            </div>
            <ul className="nav">
                <li><a href="#home" className="active"><i className="fa fa-home"></i> Home</a></li>
                <li><a href="#about"><i className="fa fa-user"></i> About</a></li>
                <li><a href="#services"><i className="fa fa-list"></i> Services</a></li>
                <li><a href="#portfolio"><i className="fa fa-briefcase"></i> Portfolio</a></li>
                <li><a href="#contact"><i className="fa fa-comments"></i> Contract</a></li>
            </ul>
        </div>
    )
}
