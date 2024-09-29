


const Contact=()=>{
    return(
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl font-bold m-2">Contact us page</h1>
            <form action="" className="flex flex-col">
                <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
                <button className="border border-black p-2 m-2 bg-slate-100 rounded-md">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
