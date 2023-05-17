import { useState, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"
import { searchUsers } from "../../context/github/GithubActions"


function UserSearch() {
    const [text, setText] = useState('')

    const { users, dispatch } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (text === '') {
            setAlert("กรุณาป้อนบางสิ่งบางอย่าง", "error")
        } else {
            dispatch({ type: 'SET_LOADING' })
            const users = await searchUsers(text)
            dispatch({ type: 'GET_USERS', payload: users })

            setText('')
        }
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full pr-40 bg-gray-200 input input-lg text-black "
                                placeholder="ค้นหา"
                                value={text}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className="absolute bg-black top-0 right-0 rounded-l-none w-36 btn btn-lg ">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                {users.length > 0 && (
                    <button
                        onClick={() => dispatch({ type: 'CLEAR_USERS' })}
                        className="btn btn-ghost btn-lg">
                        <div>
                            Clear
                        </div>
                    </button>

                )}
            </div>
        </div>
    )
}

export default UserSearch