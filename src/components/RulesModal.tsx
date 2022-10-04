import CloseIcon from '../assets/icon-close.svg'
import RulesImg from '../assets/image-rules.svg'

export function RulesModal() {

    function handleCloseModal() {
        const modal = document.querySelector('#modal');
        modal?.classList.add('hidden');
    }

    return (
        <div id="modal" className=" w-full h-screen absolute hidden top-0 left-0 z-50 bg-[rgba(0,0,0,0.6)]">

            <div className=" w-full h-screen md:w-[400px] md:h-[450px] absolute flex flex-col gap-10 items-center md:items-stretch justify-center p-7  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white">
                <div className="flex items-center justify-between">
                    <span className="font-bold text-3xl text-dark mt-12 mb-14 md:mt-0 md:mb-0">
                        RULES
                    </span>
                    <button onClick={handleCloseModal} className="hidden md:flex hover:brightness-0 hover:saturate-[100%]">
                        <img src={CloseIcon} alt="" />
                    </button>
                </div>
                <img src={RulesImg} alt="" />
                <button onClick={handleCloseModal} className="flex md:hidden hover:brightness-0 hover:saturate-[100%] self-center mt-auto mb-10">
                    <img src={CloseIcon} alt="" />
                </button>
            </div>
        </div>
    )
}