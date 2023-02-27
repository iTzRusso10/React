import { useParams } from 'react-router-dom'
import useSWR , { mutate } from 'swr'

const fetcher = async (url) => await(await (fetch(url))).json()
const GithubUser = () => {
const {username} = useParams();
const { data, error } = useSWR(username ? `https://api.github.com/users/${username}` : null, fetcher)

const Refresh = async () => {
    mutate()
}
return(
    <div>
        {!data && !error && <h1>Caricamento...</h1>}
        {error && !data && <h1>Error has occured</h1>}
        {data && !error && <ul>
            <li key={Math.random()}>{data.login}</li>
            <li key={Math.random()}>{data.id}</li>
            <li key={Math.random()}>{data.bio}</li>
            </ul>}
            <button onClick={Refresh}>Aggiorna</button>
    </div>
)
}

export default GithubUser;