import { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSession, signOut } from '../lib/auth-client';
import Loader from '../components/Loader';


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate();
    const { data: session, isPending } = useSession();

    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");

    const fetchBlogs = async () => {
        try {
            const {data} = await axios.get('/api/blog/all');
            data.success ? setBlogs(data.blogs) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])
    
    const logout = async () => {
        await signOut();
        navigate('/');
    }
    
    if (isPending) {
        return <Loader />;
    }

    const value = {
        axios, navigate, token: session, setToken: () => {}, blogs, setBlogs, input, setInput, logout, user: session?.user
    };

    return (
        <AppContext.Provider value={value}>
             { children }
        </AppContext.Provider>
    )
}

/* Note - If this error(Custom Hook) persists -> The "proper" fix would be to separate the hook into its own file 
(e.g., useAppContext.js) and keep only the AppProvider component in AppContext.jsx */
// Tip - use Agent.
export const useAppContext = () => {
    return useContext(AppContext)
}