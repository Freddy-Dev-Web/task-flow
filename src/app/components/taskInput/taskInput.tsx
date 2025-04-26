
export const TaskInput = () => {
    return (
        <div className="bg-[#171717] rounded-[8px] border-black border-[1px] px-10 py-10 mb-[30px] shadow-[0px_0px_1em_rgba(59,121,246,0.15)]"> 
            <h2 className="mb-10">🍬Ajoute ta prochaine tache</h2>
            <form className="flex justify-between items-center mb-15">
                <input type="text"
                className="bg-[#171717] border-[#272727] rounded-8 text-[16px] height-[40px] width-[100%] px-[20px] py-[10px] text-gray "
                placeholder="Indiquer un titre de tache explicite."
                />
            <button className="bouton-primary" type="submit">
                Ajouter
            </button>
            </form>
        </div>
    )
}