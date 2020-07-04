import React, { useState } from "react"


const Search = ({ setquery }) => {
    const [text, setText] = useState("")

    const onChange = (q) => {
        setText(q)
        setquery(q)
    }

    return(
        <section className="search">
            <form>
                <input
                    type="text"
                    value={text}
                    className="form-control"
                    placeholder="search character"
                    autoFocus
                    onChange={(e) => onChange(e.target.value)}
                />
            </form>
        </section>
    )
}

export default Search