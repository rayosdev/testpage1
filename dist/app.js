
class App extends React.Component{
    render() {
        return(
            <div className="main-container">
                <h1>Hey man</h1>
                {/* <Construction /> */}
            </div>
        )
    }
}


class Header extends React.Component{
    render() {
        return (
            <div className="header">
                
            </div>
        )
    }
}


class Construction extends React.Component{
    render() {
        return (
            <div className="construction__container">
                <h1 className="construction__header-text">Under Construction</h1>
                <p className="construction__paragraph">The site will be up agian soon</p>
                <img className="construction__image" src="img/construction.svg" alt="" />
            </div>
        )
    }
}





ReactDOM.render(<App />, document.getElementById("app"))