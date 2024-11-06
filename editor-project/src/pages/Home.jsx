
const Home = () => {
  return (
    <div className="homePageWrapper">
        <div className="formWrapper">
            <img src="/code-sync.png" alt="code-sync-logo"/>
            <h4 className="mainLabel">Paste invitation ROOM ID</h4>
            <div className="inputGroup">
                <input type="text" className="inputBox" placeholder="Room ID"/>
                <input type="text" className="inputBox" placeholder="USERNAME"/>
                <button className="btn joinBtn">Join</button>
                <span className="createInfo">
                    If you do not have an invite then create &nbsp; 
                    <a href=""className="createNewBtn"> new room</a>
                </span>
            </div>
        </div>
        <footer>
            <h4>Built with 💛 by <a href="">Coders Gyan</a></h4>
        </footer>
    </div>
  )
}

export default Home
