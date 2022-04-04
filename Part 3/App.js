
    const App = () => {
        return (
            <div>
                <Person name="Jim" age={19} hobbies={['fishing', 'hunting', 'whiskey']}/>
                <Person name="Kelly" age={17} hobbies={['charcuterie', 'soduko', 'knitting']}/>
                <Person name="Longnamed Sally" age={17} hobbies={['activism', 'instagram', 'volleyball']}/>
            </div>
        )
   
}

ReactDOM.render(<App/>, document.getElementById('root'))