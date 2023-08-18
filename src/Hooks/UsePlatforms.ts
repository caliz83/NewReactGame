import useData from "./UseData"

interface Platform {
    id: number;
    name: string;
    slug: string
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
//pulls the code from useData and adapts it to pull the platform information

export default usePlatforms