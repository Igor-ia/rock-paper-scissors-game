import { useContext } from 'react';
import { ScoreContext } from '../App';
import LogoImg from '../assets/logo.svg'

export function Header() {
    const { score } = useContext(ScoreContext);

    return (
        <header className="w-full mx-1 md:w-[600px] flex justify-between rounded-2xl border-solid border-2 border-header-outline p-4 mb-6">
            <img src={LogoImg} className="w-[100px] md:w-auto" alt="Logo" />
            <div className="flex flex-col px-10 items-center justify-center rounded-lg bg-white">
                <span className='text-score text-sm'>SCORE</span>
                <span className='text-dark font-bold text-5xl'>{score}</span>
            </div>
        </header>
    )
}