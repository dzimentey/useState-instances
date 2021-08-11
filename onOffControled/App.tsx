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
            {/*<Accordion titleValue={'first menu'} collapsed={true}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<Accordion titleValue={'second menu'} collapsed={false}/>*/}
        </div>
    );
}