import style from './SearchBar.module.css'

const SearchBar = ({value, onChange, onClick}) => {
    return (
        <div className={style.container}>
            <input
                className={style.searchBar}
                type="text"
                value={value}
                onChange={(e) => {
                    onChange(e.target.value)
                }}/>
            <button
                disabled={ value === ''}
                className={style.button}
                onClick={() => {
                    onClick()
                }}>
                +
            </button>
        </div>
    )
}

export default SearchBar;