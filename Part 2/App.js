
    const App = () => {
        return (
            <div>
                <Tweet username="JDNO7" name="JD" date="4/4/2022" tweet="My First Tweet"/>
                <Tweet username="Test2" name="Testy" date="4/4/2022" tweet="This is a tweet by Testy"/>
                <Tweet username="Anchorman" name="Clive" date="4/4/2022" tweet="I hope the weather doesnt suck today"/>
            </div>
        )
   
}

ReactDOM.render(<App/>, document.getElementById('root'))