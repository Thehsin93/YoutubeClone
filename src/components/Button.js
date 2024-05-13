const Button = ({name})=>{
    return <div>
        <button className="px-5 py-2 m-2 bg-gray-100 rounded-2xl font-bold text-lg hover:bg-gray-400">
            {name}
        </button>
    </div>
};

export default Button