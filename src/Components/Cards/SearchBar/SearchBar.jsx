import style from './SearchBar.module.css'

const SearchBar = ({value, onChange, onClick}) => {
    return (
        <form className={style.container}
              onSubmit={(e)=>{
                  e.preventDefault()
                  onClick()
              }}
        >
            <input
                className={style.searchBar}
                type="text"
                value={value}
                onChange={(e) => {
                    onChange(e.target.value)
                }}/>
            <button
                disabled={value === ''}
                className={style.button}
            >
                +
            </button>
        </form>
    )
}

export default SearchBar;