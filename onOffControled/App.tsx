function App() {
   let [switcher, setSwitcher] = useState(true)
    return (
        <div className="App">
            <OnOff />
            <hr/>
            <AccordionSelfcontroled/>
            <hr/>
            <UncontrolledRating />
            <hr/>
            <OnOffControlled on={switcher} onChange={setSwitcher}/>
            
        </div>
    );
}
