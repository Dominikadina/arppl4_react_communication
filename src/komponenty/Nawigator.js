import classes from "./Nawigator.module.css";

const Nawigator =() => {
    return (<header className={classes.AppHeader}>
        <div className={classes.PasekNawigacyjny}>

            <div className={classes.Lewa}></div>
            <div className={classes.TextLewa}>ARPPL4</div>

            <div className={classes.TextPrawa}>Home Lista Formularz</div>

        </div>
    </header>);
}

export default Nawigator;
